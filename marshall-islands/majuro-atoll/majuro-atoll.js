// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"majuro-atoll","repository":"australia","path":"marshall-islands/majuro-atoll","depth":2,"parent":"marshall-islands","children":["dalap-uliga-dorrit","majuro"]});
export const childModules = Object.freeze({"dalap-uliga-dorrit":"./dalap-uliga-dorrit/dalap-uliga-dorrit.js","majuro":"./majuro/majuro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
