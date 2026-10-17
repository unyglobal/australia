// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"glenferrie","repository":"australia","path":"australia/victoria/glenferrie","depth":3,"parent":"australia/victoria","children":["auburn-south"]});
export const childModules = Object.freeze({"auburn-south":"./auburn-south/auburn-south.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
