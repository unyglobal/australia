// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mackay","repository":"australia","path":"australia/queensland/mackay","depth":3,"parent":"australia/queensland","children":["west-mackay"]});
export const childModules = Object.freeze({"west-mackay":"./west-mackay/west-mackay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
