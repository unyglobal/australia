// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northland","repository":"australia","path":"new-zealand/northland","depth":2,"parent":"new-zealand","children":["whangarei"]});
export const childModules = Object.freeze({"whangarei":"./whangarei/whangarei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
