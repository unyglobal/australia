// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"invercargill","repository":"australia","path":"new-zealand/southland/invercargill","depth":3,"parent":"new-zealand/southland","children":["avenal","windsor"]});
export const childModules = Object.freeze({"avenal":"./avenal/avenal.js","windsor":"./windsor/windsor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
