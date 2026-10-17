// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ballarat","repository":"australia","path":"australia/victoria/ballarat","depth":3,"parent":"australia/victoria","children":["ballarat-central"]});
export const childModules = Object.freeze({"ballarat-central":"./ballarat-central/ballarat-central.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
