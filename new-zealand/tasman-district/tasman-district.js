// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tasman-district","repository":"australia","path":"new-zealand/tasman-district","depth":2,"parent":"new-zealand","children":["richmond"]});
export const childModules = Object.freeze({"richmond":"./richmond/richmond.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
