// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cairns","repository":"australia","path":"australia/queensland/cairns","depth":3,"parent":"australia/queensland","children":["cairns-city","parramatta-park"]});
export const childModules = Object.freeze({"cairns-city":"./cairns-city/cairns-city.js","parramatta-park":"./parramatta-park/parramatta-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
