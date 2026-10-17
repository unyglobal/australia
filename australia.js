// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"australia","repository":"australia","path":"","depth":0,"parent":null,"children":["australia","fiji","kiribati","marshall-islands","micronesia","nauru","new-zealand","palau","papua-new-guinea","samoa","solomon-islands","tonga","tuvalu","vanuatu"]});
export const childModules = Object.freeze({"australia":"./australia/australia.js","fiji":"./fiji/fiji.js","kiribati":"./kiribati/kiribati.js","marshall-islands":"./marshall-islands/marshall-islands.js","micronesia":"./micronesia/micronesia.js","nauru":"./nauru/nauru.js","new-zealand":"./new-zealand/new-zealand.js","palau":"./palau/palau.js","papua-new-guinea":"./papua-new-guinea/papua-new-guinea.js","samoa":"./samoa/samoa.js","solomon-islands":"./solomon-islands/solomon-islands.js","tonga":"./tonga/tonga.js","tuvalu":"./tuvalu/tuvalu.js","vanuatu":"./vanuatu/vanuatu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
