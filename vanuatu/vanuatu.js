// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vanuatu","repository":"australia","path":"vanuatu","depth":1,"parent":"","children":["shefa"]});
export const childModules = Object.freeze({"shefa":"./shefa/shefa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
