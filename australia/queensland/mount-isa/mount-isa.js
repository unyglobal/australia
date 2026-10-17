// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mount-isa","repository":"australia","path":"australia/queensland/mount-isa","depth":3,"parent":"australia/queensland","children":["menzies","mount-isa-city-centre"]});
export const childModules = Object.freeze({"menzies":"./menzies/menzies.js","mount-isa-city-centre":"./mount-isa-city-centre/mount-isa-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
