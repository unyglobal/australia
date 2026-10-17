// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-province","repository":"australia","path":"papua-new-guinea/western-province","depth":2,"parent":"papua-new-guinea","children":["daru"]});
export const childModules = Object.freeze({"daru":"./daru/daru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
