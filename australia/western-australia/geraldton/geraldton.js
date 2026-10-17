// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geraldton","repository":"australia","path":"australia/western-australia/geraldton","depth":3,"parent":"australia/western-australia","children":["geraldton-city-centre"]});
export const childModules = Object.freeze({"geraldton-city-centre":"./geraldton-city-centre/geraldton-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
