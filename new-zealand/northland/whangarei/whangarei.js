// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"whangarei","repository":"australia","path":"new-zealand/northland/whangarei","depth":3,"parent":"new-zealand/northland","children":["morningside","riverside"]});
export const childModules = Object.freeze({"morningside":"./morningside/morningside.js","riverside":"./riverside/riverside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
