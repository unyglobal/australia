// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ryde","repository":"australia","path":"australia/new-south-wales/ryde","depth":3,"parent":"australia/new-south-wales","children":["putney"]});
export const childModules = Object.freeze({"putney":"./putney/putney.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
