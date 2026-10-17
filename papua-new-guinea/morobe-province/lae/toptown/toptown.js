// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toptown","repository":"australia","path":"papua-new-guinea/morobe-province/lae/toptown","depth":4,"parent":"papua-new-guinea/morobe-province/lae","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
