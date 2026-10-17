// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porirua-east","repository":"australia","path":"new-zealand/wellington-region/porirua/porirua-east","depth":4,"parent":"new-zealand/wellington-region/porirua","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
