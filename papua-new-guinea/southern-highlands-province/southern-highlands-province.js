// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-highlands-province","repository":"australia","path":"papua-new-guinea/southern-highlands-province","depth":2,"parent":"papua-new-guinea","children":["mendi"]});
export const childModules = Object.freeze({"mendi":"./mendi/mendi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
