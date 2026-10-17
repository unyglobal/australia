// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gilbert-islands","repository":"australia","path":"kiribati/gilbert-islands","depth":2,"parent":"kiribati","children":["tarawa"]});
export const childModules = Object.freeze({"tarawa":"./tarawa/tarawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
