// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alice-springs","repository":"australia","path":"australia/northern-territory/alice-springs","depth":3,"parent":"australia/northern-territory","children":["alice-springs-city-centre"]});
export const childModules = Object.freeze({"alice-springs-city-centre":"./alice-springs-city-centre/alice-springs-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
