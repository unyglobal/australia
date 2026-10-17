// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"albany-creek","repository":"australia","path":"australia/queensland/albany-creek","depth":3,"parent":"australia/queensland","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
