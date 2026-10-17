// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tongatapu","repository":"australia","path":"tonga/tongatapu","depth":2,"parent":"tonga","children":["nuku-alofa"]});
export const childModules = Object.freeze({"nuku-alofa":"./nuku-alofa/nuku-alofa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
