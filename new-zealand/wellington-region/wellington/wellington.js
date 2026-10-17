// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wellington","repository":"australia","path":"new-zealand/wellington-region/wellington","depth":3,"parent":"new-zealand/wellington-region","children":["te-aro","wellington-central"]});
export const childModules = Object.freeze({"te-aro":"./te-aro/te-aro.js","wellington-central":"./wellington-central/wellington-central.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
