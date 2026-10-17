// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wainuiomata","repository":"australia","path":"new-zealand/wellington-region/wainuiomata","depth":3,"parent":"new-zealand/wellington-region","children":["homedale"]});
export const childModules = Object.freeze({"homedale":"./homedale/homedale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
