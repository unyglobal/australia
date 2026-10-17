// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"port-moresby","repository":"australia","path":"papua-new-guinea/national-capital/port-moresby","depth":3,"parent":"papua-new-guinea/national-capital","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
