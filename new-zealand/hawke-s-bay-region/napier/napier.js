// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"napier","repository":"australia","path":"new-zealand/hawke-s-bay-region/napier","depth":3,"parent":"new-zealand/hawke-s-bay-region","children":["bluff-hill"]});
export const childModules = Object.freeze({"bluff-hill":"./bluff-hill/bluff-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
