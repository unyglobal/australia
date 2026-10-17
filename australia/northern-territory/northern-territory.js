// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-territory","repository":"australia","path":"australia/northern-territory","depth":2,"parent":"australia","children":["alice-springs","darwin","palmerston"]});
export const childModules = Object.freeze({"alice-springs":"./alice-springs/alice-springs.js","darwin":"./darwin/darwin.js","palmerston":"./palmerston/palmerston.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
