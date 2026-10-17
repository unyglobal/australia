// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamworth","repository":"australia","path":"australia/new-south-wales/tamworth","depth":3,"parent":"australia/new-south-wales","children":["east-tamworth","tamworth-city-centre"]});
export const childModules = Object.freeze({"east-tamworth":"./east-tamworth/east-tamworth.js","tamworth-city-centre":"./tamworth-city-centre/tamworth-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
