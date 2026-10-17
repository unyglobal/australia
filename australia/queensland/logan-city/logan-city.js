// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"logan-city","repository":"australia","path":"australia/queensland/logan-city","depth":3,"parent":"australia/queensland","children":["logan-central"]});
export const childModules = Object.freeze({"logan-central":"./logan-central/logan-central.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
