// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"launceston","repository":"australia","path":"australia/tasmania/launceston","depth":3,"parent":"australia/tasmania","children":["launceston-city-centre"]});
export const childModules = Object.freeze({"launceston-city-centre":"./launceston-city-centre/launceston-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
