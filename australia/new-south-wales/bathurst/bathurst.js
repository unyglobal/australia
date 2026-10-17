// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bathurst","repository":"australia","path":"australia/new-south-wales/bathurst","depth":3,"parent":"australia/new-south-wales","children":["bathurst-city-centre"]});
export const childModules = Object.freeze({"bathurst-city-centre":"./bathurst-city-centre/bathurst-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
