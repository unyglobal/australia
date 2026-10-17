// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southland","repository":"australia","path":"new-zealand/southland","depth":2,"parent":"new-zealand","children":["invercargill"]});
export const childModules = Object.freeze({"invercargill":"./invercargill/invercargill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
