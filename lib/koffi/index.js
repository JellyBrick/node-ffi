/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

const koffi = require("koffi");
const win32 = require("./types/windows");
const deno = require("./types/deno");

const setAlias = function(types){  
  if (typeof types !== "object") throw new Error("Invalid types");
  for (const [name, type] of Object.entries(types))
    if (koffi.types[name] === undefined) 
      koffi.alias(name, type);
};

if (process.platform === "win32") setAlias(win32);
setAlias({
  pointer: koffi.pointer(koffi.types.void),
  ...deno.types
});

export * from "./open.js";
export * from "./helper.js";
export const types = Object.assign(Object.create(null), {
  pointer: koffi.pointer(koffi.types.void),
  ...koffi.types,
  ...deno.types,
  win32
});