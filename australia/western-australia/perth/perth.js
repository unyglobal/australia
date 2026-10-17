// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"perth","repository":"australia","path":"australia/western-australia/perth","depth":3,"parent":"australia/western-australia","children":["northbridge","perth-city-centre"]});
export const childModules = Object.freeze({"northbridge":"./northbridge/northbridge.js","perth-city-centre":"./perth-city-centre/perth-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
