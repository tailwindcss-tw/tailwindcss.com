const { getOptions } = require("loader-utils")
const fs = require('fs')
const fsPromises = require('fs').promises


async function file_replacer (source) {
  const base = getOptions(this).base
  const list = getOptions(this).replacement
  
  const filename = this.resourcePath.split(/[\/\\]+/)
  
  const saveFilename = filename[filename.length-1]
  const targetFilename = base ? [base,list[saveFilename]].join("/") : list[saveFilename]
  
  let translatedFileContent = ""
  
  try{
    await fsPromises.access(targetFilename, fs.constants.R_OK | fs.constants.W_OK)
    const stat = await fsPromises.lstat(targetFilename)

    if(stat.isFile()){
      translatedFileContent = await fsPromises.readFile(targetFilename)
      console.log(`[replacer] replaced '${saveFilename}' to '${targetFilename}'`)
    }
  } catch {
    
  }
  return translatedFileContent? translatedFileContent: source
};

module.exports = file_replacer