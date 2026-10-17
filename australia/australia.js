// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"australia","repository":"australia","path":"australia","depth":1,"parent":"","children":["australian-capital-territory","burwood","burwood-a","epping","epping-a","new-south-wales","northern-territory","queensland","south-australia","tasmania","victoria","western-australia"]});
export const childModules = Object.freeze({"australian-capital-territory":"./australian-capital-territory/australian-capital-territory.js","burwood":"./burwood/burwood.js","burwood-a":"./burwood-a/burwood-a.js","epping":"./epping/epping.js","epping-a":"./epping-a/epping-a.js","new-south-wales":"./new-south-wales/new-south-wales.js","northern-territory":"./northern-territory/northern-territory.js","queensland":"./queensland/queensland.js","south-australia":"./south-australia/south-australia.js","tasmania":"./tasmania/tasmania.js","victoria":"./victoria/victoria.js","western-australia":"./western-australia/western-australia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
