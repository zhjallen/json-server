const fs = require('fs')
const path = require('path')
const MOCK_DIR = path.resolve(__dirname, 'test');

const walk = dir => {
    let results = []
    let list = fs.readdirSync(dir)
    list.forEach(function (file) {
      file = dir + '/' + file
      let stat = fs.statSync(file)
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(file))//若file是文件夹，则遍历获取该文件夹下文件内数据。
      } else if (path.extname(file) === '.js') {
        results.push(file)
      }
    })
    return results
  }
  const files = walk(MOCK_DIR)
  let db = {}
  files.forEach(function (file) {
    Object.assign(db, require(file))
  })
  module.exports = function () {
    return db
  }