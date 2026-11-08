/**
 * Projeção ortográfica mínima para desenhar o globo do NOC Horizon
 * em SVG no build, sem bibliotecas nem JavaScript no navegador.
 */
const rad = Math.PI / 180;

type Vec = [number, number, number];

export type Globe = {
  graticule: string;
  arcs: string[];
  points: { x: number; y: number }[];
};

function toVec(lon: number, lat: number): Vec {
  const l = lon * rad;
  const p = lat * rad;
  return [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)];
}

function project(lon: number, lat: number, lon0: number, lat0: number, r: number, c: number) {
  const l = (lon - lon0) * rad;
  const p = lat * rad;
  const p0 = lat0 * rad;
  const cosC = Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l);
  return {
    visible: cosC >= 0,
    x: c + r * Math.cos(p) * Math.sin(l),
    y: c - r * (Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l)),
  };
}

function polyline(coords: [number, number][], lon0: number, lat0: number, r: number, c: number) {
  let d = "";
  let pen = false;
  for (const [lon, lat] of coords) {
    const pt = project(lon, lat, lon0, lat0, r, c);
    if (!pt.visible) {
      pen = false;
      continue;
    }
    d += `${pen ? "L" : "M"}${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    pen = true;
  }
  return d;
}

function greatCircle(a: [number, number], b: [number, number], steps = 48): [number, number][] {
  const va = toVec(...a);
  const vb = toVec(...b);
  const dot = Math.min(1, Math.max(-1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  const omega = Math.acos(dot);
  const out: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const s = Math.sin(omega) || 1;
    const k1 = Math.sin((1 - t) * omega) / s;
    const k2 = Math.sin(t * omega) / s;
    const v: Vec = [k1 * va[0] + k2 * vb[0], k1 * va[1] + k2 * vb[1], k1 * va[2] + k2 * vb[2]];
    out.push([Math.atan2(v[1], v[0]) / rad, Math.asin(v[2]) / rad]);
  }
  return out;
}

export function buildGlobe(opts: {
  size: number;
  lon0: number;
  lat0: number;
  sites: [number, number][];
  links: [number, number][];
}): Globe {
  const { size, lon0, lat0, sites, links } = opts;
  const c = size / 2;
  const r = size / 2 - 2;
  let graticule = "";

  for (let lon = -180; lon < 180; lon += 20) {
    const line: [number, number][] = [];
    for (let lat = -90; lat <= 90; lat += 3) line.push([lon, lat]);
    graticule += polyline(line, lon0, lat0, r, c);
  }
  for (let lat = -60; lat <= 60; lat += 20) {
    const line: [number, number][] = [];
    for (let lon = -180; lon <= 180; lon += 3) line.push([lon, lat]);
    graticule += polyline(line, lon0, lat0, r, c);
  }

  const arcs = links.map(([a, b]) => {
    const from = sites[a];
    const to = sites[b];
    return from && to ? polyline(greatCircle(from, to), lon0, lat0, r, c) : "";
  });

  const points = sites
    .map(([lon, lat]) => project(lon, lat, lon0, lat0, r, c))
    .filter((p) => p.visible)
    .map(({ x, y }) => ({ x, y }));

  return { graticule, arcs, points };
}
