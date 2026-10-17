// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-highlands-province","repository":"australia","path":"papua-new-guinea/eastern-highlands-province","depth":2,"parent":"papua-new-guinea","children":["goroka"]});
export const childModules = Object.freeze({"goroka":"./goroka/goroka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
