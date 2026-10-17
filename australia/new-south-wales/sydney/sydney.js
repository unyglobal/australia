// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sydney","repository":"australia","path":"australia/new-south-wales/sydney","depth":3,"parent":"australia/new-south-wales","children":["darling-harbour"]});
export const childModules = Object.freeze({"darling-harbour":"./darling-harbour/darling-harbour.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
