// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kola-a","repository":"australia","path":"solomon-islands/honiara/kola-a","depth":3,"parent":"solomon-islands/honiara","children":["matariu"]});
export const childModules = Object.freeze({"matariu":"./matariu/matariu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
