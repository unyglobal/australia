// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"albany","repository":"australia","path":"australia/western-australia/albany","depth":3,"parent":"australia/western-australia","children":["albany-city-centre"]});
export const childModules = Object.freeze({"albany-city-centre":"./albany-city-centre/albany-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
