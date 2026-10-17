// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lower-hutt","repository":"australia","path":"new-zealand/wellington-region/lower-hutt","depth":3,"parent":"new-zealand/wellington-region","children":["waiwhetu","waterloo"]});
export const childModules = Object.freeze({"waiwhetu":"./waiwhetu/waiwhetu.js","waterloo":"./waterloo/waterloo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
