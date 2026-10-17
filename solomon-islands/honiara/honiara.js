// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"honiara","repository":"australia","path":"solomon-islands/honiara","depth":2,"parent":"solomon-islands","children":["kola-a","panatina","vura"]});
export const childModules = Object.freeze({"kola-a":"./kola-a/kola-a.js","panatina":"./panatina/panatina.js","vura":"./vura/vura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
