const { getOptions } = require("loader-utils")
var fs = require('fs')

function file_replacer (source) {
  const list = getOptions(this).replacement

  const filename = this.resourcePath.split(/[\/\\]+/)
  const save_filename = filename[filename.length-1]

  
  if(fs.existsSync(list[save_filename])){
    console.log(`[replacer] replaced '${save_filename}' to '${list[save_filename]}'`)
    return fs.readFileSync(list[save_filename])
  } else {
    // console.log(`[replacer] replace failed.`)
    return source
  }

};

module.exports = file_replacer