// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"whyalla","repository":"australia","path":"australia/south-australia/whyalla","depth":3,"parent":"australia/south-australia","children":["whyalla-playford"]});
export const childModules = Object.freeze({"whyalla-playford":"./whyalla-playford/whyalla-playford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
