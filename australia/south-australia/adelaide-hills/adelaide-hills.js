// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adelaide-hills","repository":"australia","path":"australia/south-australia/adelaide-hills","depth":3,"parent":"australia/south-australia","children":["teringie"]});
export const childModules = Object.freeze({"teringie":"./teringie/teringie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
