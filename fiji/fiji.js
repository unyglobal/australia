// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fiji","repository":"australia","path":"fiji","depth":1,"parent":"","children":["central","northern","western"]});
export const childModules = Object.freeze({"central":"./central/central.js","northern":"./northern/northern.js","western":"./western/western.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
