// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"perth-city-centre","repository":"australia","path":"australia/western-australia/perth/perth-city-centre","depth":4,"parent":"australia/western-australia/perth","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
