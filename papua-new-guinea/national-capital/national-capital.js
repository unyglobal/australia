// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"national-capital","repository":"australia","path":"papua-new-guinea/national-capital","depth":2,"parent":"papua-new-guinea","children":["port-moresby"]});
export const childModules = Object.freeze({"port-moresby":"./port-moresby/port-moresby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
