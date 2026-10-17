// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lae","repository":"australia","path":"papua-new-guinea/morobe-province/lae","depth":3,"parent":"papua-new-guinea/morobe-province","children":["toptown"]});
export const childModules = Object.freeze({"toptown":"./toptown/toptown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
