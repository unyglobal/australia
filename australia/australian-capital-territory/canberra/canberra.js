// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canberra","repository":"australia","path":"australia/australian-capital-territory/canberra","depth":3,"parent":"australia/australian-capital-territory","children":["canberra-city"]});
export const childModules = Object.freeze({"canberra-city":"./canberra-city/canberra-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
