// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karratha-city-centre","repository":"australia","path":"australia/western-australia/karratha/karratha-city-centre","depth":4,"parent":"australia/western-australia/karratha","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
