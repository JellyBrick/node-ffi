/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/
const koffi = require("koffi");
const util = require("util");

function load(path, option = {}){

  const conventions = [
    "cdecl", 
    "func", //allias to cdecl
    "stdcall",
    "fastcall",
    "thiscall"
  ];
  
  const options = {
    ignoreLoadingFail: option.ignoreLoadingFail ? true : false,
    ignoreMissingSymbol: option.ignoreMissingSymbol ? true : false,
    abi: conventions.includes(option.abi) ? option.abi : "func"
  };

  const ext = {
    "win32": ".dll",
    "darwin": ".dylib",
  }[process.platform] ?? ".so";

  if (path.indexOf(ext) === -1) path += ext;
  const [dylib, err] = koffi.load(path);
   
  if(err && !options.ignoreLoadingFail){
    throw new Error(err);
  }
   
  return function(symbol, result, parameters){
    try{
      if (!dylib) return undefined;
      return dylib[options.abi](symbol, result, parameters);
    }catch(err){
      if (
        options.ignoreMissingSymbol && 
        err.message.startsWith("Cannot find function") &&
        err.message.endsWith("in shared library")
      ) return undefined;
      throw new Error(err);
    }
  }
}

function dlopen(path, symbols, option){
  
  if (typeof symbols !== "object" || Object.values(symbols).every(elem => typeof elem !== "object")) {
    throw new Error("symbols must be an object");
  }

  const lib = Object.create(null);
  const call = load(path, option);
  for (const [name, definition] of Object.entries(symbols)){
    
    if (name === "__proto__") continue; //not allowed
    
    const parameters = Array.isArray(definition.parameters) ? definition.parameters : [];
    const result = definition.result || "void";
    const nonblocking = definition.nonblocking ? true : false;
    const symbol = definition.symbol || name;

    const fn = call(symbol, result, parameters);
    if(typeof fn === "function"){
      lib[name] = nonblocking ? util.promisify(fn.async) : fn;
    }
    
  }
  return lib;
}

module.exports = { load, dlopen };