// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"otago","repository":"australia","path":"new-zealand/otago","depth":2,"parent":"new-zealand","children":["dunedin"]});
export const childModules = Object.freeze({"dunedin":"./dunedin/dunedin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
