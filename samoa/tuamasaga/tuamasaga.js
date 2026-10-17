// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tuamasaga","repository":"australia","path":"samoa/tuamasaga","depth":2,"parent":"samoa","children":["apia"]});
export const childModules = Object.freeze({"apia":"./apia/apia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
