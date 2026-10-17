// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-new-britain-province","repository":"australia","path":"papua-new-guinea/west-new-britain-province","depth":2,"parent":"papua-new-guinea","children":["kimbe"]});
export const childModules = Object.freeze({"kimbe":"./kimbe/kimbe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
