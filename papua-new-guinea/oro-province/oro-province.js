// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oro-province","repository":"australia","path":"papua-new-guinea/oro-province","depth":2,"parent":"papua-new-guinea","children":["popondetta"]});
export const childModules = Object.freeze({"popondetta":"./popondetta/popondetta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
