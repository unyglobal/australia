// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parramatta","repository":"australia","path":"australia/new-south-wales/parramatta","depth":3,"parent":"australia/new-south-wales","children":["harris-park"]});
export const childModules = Object.freeze({"harris-park":"./harris-park/harris-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
