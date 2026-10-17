// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-australia","repository":"australia","path":"australia/south-australia","depth":2,"parent":"australia","children":["adelaide","adelaide-city-centre","adelaide-hills","gawler","morphett-vale","mount-barker","mount-gambier","parafield-gardens","paralowie","whyalla"]});
export const childModules = Object.freeze({"adelaide":"./adelaide/adelaide.js","adelaide-city-centre":"./adelaide-city-centre/adelaide-city-centre.js","adelaide-hills":"./adelaide-hills/adelaide-hills.js","gawler":"./gawler/gawler.js","morphett-vale":"./morphett-vale/morphett-vale.js","mount-barker":"./mount-barker/mount-barker.js","mount-gambier":"./mount-gambier/mount-gambier.js","parafield-gardens":"./parafield-gardens/parafield-gardens.js","paralowie":"./paralowie/paralowie.js","whyalla":"./whyalla/whyalla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
