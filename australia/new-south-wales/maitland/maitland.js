// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maitland","repository":"australia","path":"australia/new-south-wales/maitland","depth":3,"parent":"australia/new-south-wales","children":["maitland-city-centre"]});
export const childModules = Object.freeze({"maitland-city-centre":"./maitland-city-centre/maitland-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
