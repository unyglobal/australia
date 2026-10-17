// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hastings","repository":"australia","path":"new-zealand/hawke-s-bay-region/hastings","depth":3,"parent":"new-zealand/hawke-s-bay-region","children":["mayfair","parkvale"]});
export const childModules = Object.freeze({"mayfair":"./mayfair/mayfair.js","parkvale":"./parkvale/parkvale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
