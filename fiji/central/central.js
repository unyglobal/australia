// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central","repository":"australia","path":"fiji/central","depth":2,"parent":"fiji","children":["lami","nasinu","suva"]});
export const childModules = Object.freeze({"lami":"./lami/lami.js","nasinu":"./nasinu/nasinu.js","suva":"./suva/suva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
