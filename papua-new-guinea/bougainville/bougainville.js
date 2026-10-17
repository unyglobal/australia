// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bougainville","repository":"australia","path":"papua-new-guinea/bougainville","depth":2,"parent":"papua-new-guinea","children":["arawa"]});
export const childModules = Object.freeze({"arawa":"./arawa/arawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
