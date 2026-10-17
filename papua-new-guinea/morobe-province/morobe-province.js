// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morobe-province","repository":"australia","path":"papua-new-guinea/morobe-province","depth":2,"parent":"papua-new-guinea","children":["bulolo","lae"]});
export const childModules = Object.freeze({"bulolo":"./bulolo/bulolo.js","lae":"./lae/lae.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
