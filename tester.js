const { getOptions } = require("loader-utils")
var fs = require('fs')

function file_replacer (source) {
  const base = getOptions(this).base
  const list = getOptions(this).replacement

  const filename = this.resourcePath.split(/[\/\\]+/)

  const save_filename = filename[filename.length-1]
  const target_filename = base ? [base,list[save_filename]].join("/") : list[save_filename]

  if(fs.existsSync(target_filename) && fs.lstatSync(target_filename).isFile()){
    console.log(`[replacer] replaced '${save_filename}' to '${target_filename}'`)
    return fs.readFileSync(target_filename)
  } else {
    // console.log(`[replacer] replace failed.`)
    return source
  }

};

module.exports = file_replacer