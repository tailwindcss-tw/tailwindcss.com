const { getOptions } = require("loader-utils")
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

async function fileReplacer (source) {
  const base = getOptions(this).base
  const list = getOptions(this).replacement
  
  const filename = path.parse(this.resourcePath)
  
  const saveFilename = filename.base
  const targetFilename = base ? path.join(base,String(list[saveFilename])) : list[saveFilename]

  try{
    await fsPromises.access(targetFilename, fs.constants.R_OK | fs.constants.W_OK)
    const stat = await fsPromises.lstat(targetFilename)
    
    let translatedFileContent = ""

    if(stat.isFile()){
      translatedFileContent = await fsPromises.readFile(targetFilename)
    } else {
      throw `Target path "${targetFilename}" is not a file.`
    }
    
    console.log(`[file-replacer] replaced '${saveFilename}' to '${targetFilename}'`)
    return translatedFileContent
  } catch(e) {
    // console.log(`[file-replacer] ${e}`)
    return source
  }
};

module.exports = fileReplacer