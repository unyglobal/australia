// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-new-britain-province","repository":"australia","path":"papua-new-guinea/east-new-britain-province","depth":2,"parent":"papua-new-guinea","children":["kokopo"]});
export const childModules = Object.freeze({"kokopo":"./kokopo/kokopo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
