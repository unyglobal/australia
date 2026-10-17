// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toowoomba","repository":"australia","path":"australia/queensland/toowoomba","depth":3,"parent":"australia/queensland","children":["toowoomba-city-centre"]});
export const childModules = Object.freeze({"toowoomba-city-centre":"./toowoomba-city-centre/toowoomba-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
