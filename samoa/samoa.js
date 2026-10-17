// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samoa","repository":"australia","path":"samoa","depth":1,"parent":"","children":["tuamasaga"]});
export const childModules = Object.freeze({"tuamasaga":"./tuamasaga/tuamasaga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
