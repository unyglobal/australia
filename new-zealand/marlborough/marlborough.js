// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marlborough","repository":"australia","path":"new-zealand/marlborough","depth":2,"parent":"new-zealand","children":["blenheim"]});
export const childModules = Object.freeze({"blenheim":"./blenheim/blenheim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
