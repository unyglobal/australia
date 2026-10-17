// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geraldton-city-centre","repository":"australia","path":"australia/western-australia/geraldton/geraldton-city-centre","depth":4,"parent":"australia/western-australia/geraldton","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
