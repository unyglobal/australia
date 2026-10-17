// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wellington-central","repository":"australia","path":"new-zealand/wellington-region/wellington/wellington-central","depth":4,"parent":"new-zealand/wellington-region/wellington","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
