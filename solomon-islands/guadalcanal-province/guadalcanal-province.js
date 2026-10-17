// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guadalcanal-province","repository":"australia","path":"solomon-islands/guadalcanal-province","depth":2,"parent":"solomon-islands","children":["malango","nggosi","tandai"]});
export const childModules = Object.freeze({"malango":"./malango/malango.js","nggosi":"./nggosi/nggosi.js","tandai":"./tandai/tandai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
