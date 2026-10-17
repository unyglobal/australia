// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brisbane","repository":"australia","path":"australia/queensland/brisbane","depth":3,"parent":"australia/queensland","children":["brisbane-central-business-district","spring-hill"]});
export const childModules = Object.freeze({"brisbane-central-business-district":"./brisbane-central-business-district/brisbane-central-business-district.js","spring-hill":"./spring-hill/spring-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
