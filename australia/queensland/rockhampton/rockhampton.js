// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rockhampton","repository":"australia","path":"australia/queensland/rockhampton","depth":3,"parent":"australia/queensland","children":["rockhampton-city-centre"]});
export const childModules = Object.freeze({"rockhampton-city-centre":"./rockhampton-city-centre/rockhampton-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
