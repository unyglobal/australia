// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western","repository":"australia","path":"fiji/western","depth":2,"parent":"fiji","children":["lautoka","nadi","sigatoka"]});
export const childModules = Object.freeze({"lautoka":"./lautoka/lautoka.js","nadi":"./nadi/nadi.js","sigatoka":"./sigatoka/sigatoka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
