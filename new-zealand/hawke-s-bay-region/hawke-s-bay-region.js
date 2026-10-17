// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hawke-s-bay-region","repository":"australia","path":"new-zealand/hawke-s-bay-region","depth":2,"parent":"new-zealand","children":["hastings","napier"]});
export const childModules = Object.freeze({"hastings":"./hastings/hastings.js","napier":"./napier/napier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
