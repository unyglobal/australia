// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rockingham","repository":"australia","path":"australia/western-australia/rockingham","depth":3,"parent":"australia/western-australia","children":["rockingham-city-centre"]});
export const childModules = Object.freeze({"rockingham-city-centre":"./rockingham-city-centre/rockingham-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
