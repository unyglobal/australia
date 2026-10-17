// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"solomon-islands","repository":"australia","path":"solomon-islands","depth":1,"parent":"","children":["guadalcanal-province","honiara"]});
export const childModules = Object.freeze({"guadalcanal-province":"./guadalcanal-province/guadalcanal-province.js","honiara":"./honiara/honiara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
