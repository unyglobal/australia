// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mosman","repository":"australia","path":"australia/new-south-wales/mosman","depth":3,"parent":"australia/new-south-wales","children":["clifton-gardens"]});
export const childModules = Object.freeze({"clifton-gardens":"./clifton-gardens/clifton-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
