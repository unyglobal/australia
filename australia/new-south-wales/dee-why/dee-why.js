// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dee-why","repository":"australia","path":"australia/new-south-wales/dee-why","depth":3,"parent":"australia/new-south-wales","children":["warringah"]});
export const childModules = Object.freeze({"warringah":"./warringah/warringah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
