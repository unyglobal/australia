// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tonga","repository":"australia","path":"tonga","depth":1,"parent":"","children":["tongatapu"]});
export const childModules = Object.freeze({"tongatapu":"./tongatapu/tongatapu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
