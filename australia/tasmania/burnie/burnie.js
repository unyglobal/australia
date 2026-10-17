// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burnie","repository":"australia","path":"australia/tasmania/burnie","depth":3,"parent":"australia/tasmania","children":["burnie-city-centre","montello","south-burnie"]});
export const childModules = Object.freeze({"burnie-city-centre":"./burnie-city-centre/burnie-city-centre.js","montello":"./montello/montello.js","south-burnie":"./south-burnie/south-burnie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
