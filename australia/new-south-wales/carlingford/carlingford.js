// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carlingford","repository":"australia","path":"australia/new-south-wales/carlingford","depth":3,"parent":"australia/new-south-wales","children":["dundas-valley"]});
export const childModules = Object.freeze({"dundas-valley":"./dundas-valley/dundas-valley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
