// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-highlands-province","repository":"australia","path":"papua-new-guinea/western-highlands-province","depth":2,"parent":"papua-new-guinea","children":["mount-hagen"]});
export const childModules = Object.freeze({"mount-hagen":"./mount-hagen/mount-hagen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
