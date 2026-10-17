// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geelong","repository":"australia","path":"australia/victoria/geelong","depth":3,"parent":"australia/victoria","children":["geelong-city-centre"]});
export const childModules = Object.freeze({"geelong-city-centre":"./geelong-city-centre/geelong-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
