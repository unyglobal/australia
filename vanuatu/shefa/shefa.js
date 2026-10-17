// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shefa","repository":"australia","path":"vanuatu/shefa","depth":2,"parent":"vanuatu","children":["port-vila"]});
export const childModules = Object.freeze({"port-vila":"./port-vila/port-vila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
