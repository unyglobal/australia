// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wellington-region","repository":"australia","path":"new-zealand/wellington-region","depth":2,"parent":"new-zealand","children":["karori","lower-hutt","masterton","paraparaumu","porirua","upper-hutt","wainuiomata","wellington"]});
export const childModules = Object.freeze({"karori":"./karori/karori.js","lower-hutt":"./lower-hutt/lower-hutt.js","masterton":"./masterton/masterton.js","paraparaumu":"./paraparaumu/paraparaumu.js","porirua":"./porirua/porirua.js","upper-hutt":"./upper-hutt/upper-hutt.js","wainuiomata":"./wainuiomata/wainuiomata.js","wellington":"./wellington/wellington.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
