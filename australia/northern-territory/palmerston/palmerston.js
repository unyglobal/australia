// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"palmerston","repository":"australia","path":"australia/northern-territory/palmerston","depth":3,"parent":"australia/northern-territory","children":["driver","gray","palmerston-city"]});
export const childModules = Object.freeze({"driver":"./driver/driver.js","gray":"./gray/gray.js","palmerston-city":"./palmerston-city/palmerston-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
