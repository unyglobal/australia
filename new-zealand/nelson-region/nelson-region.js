// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nelson-region","repository":"australia","path":"new-zealand/nelson-region","depth":2,"parent":"new-zealand","children":["nelson","stoke"]});
export const childModules = Object.freeze({"nelson":"./nelson/nelson.js","stoke":"./stoke/stoke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
