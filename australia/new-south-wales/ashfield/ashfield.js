// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ashfield","repository":"australia","path":"australia/new-south-wales/ashfield","depth":3,"parent":"australia/new-south-wales","children":["croydon"]});
export const childModules = Object.freeze({"croydon":"./croydon/croydon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
