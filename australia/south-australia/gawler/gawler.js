// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gawler","repository":"australia","path":"australia/south-australia/gawler","depth":3,"parent":"australia/south-australia","children":["gawler-city-centre","gawler-south"]});
export const childModules = Object.freeze({"gawler-city-centre":"./gawler-city-centre/gawler-city-centre.js","gawler-south":"./gawler-south/gawler-south.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
