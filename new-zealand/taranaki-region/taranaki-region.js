// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taranaki-region","repository":"australia","path":"new-zealand/taranaki-region","depth":2,"parent":"new-zealand","children":["new-plymouth"]});
export const childModules = Object.freeze({"new-plymouth":"./new-plymouth/new-plymouth.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
