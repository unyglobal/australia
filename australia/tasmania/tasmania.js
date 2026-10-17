// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tasmania","repository":"australia","path":"australia/tasmania","depth":2,"parent":"australia","children":["burnie","devonport","hobart","launceston"]});
export const childModules = Object.freeze({"burnie":"./burnie/burnie.js","devonport":"./devonport/devonport.js","hobart":"./hobart/hobart.js","launceston":"./launceston/launceston.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
