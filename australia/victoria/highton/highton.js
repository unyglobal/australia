// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"highton","repository":"australia","path":"australia/victoria/highton","depth":3,"parent":"australia/victoria","children":["wandana-heights"]});
export const childModules = Object.freeze({"wandana-heights":"./wandana-heights/wandana-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
