// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kimbe","repository":"australia","path":"papua-new-guinea/west-new-britain-province/kimbe","depth":3,"parent":"papua-new-guinea/west-new-britain-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
