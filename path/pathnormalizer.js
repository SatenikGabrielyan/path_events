const path = require("node:path")

class PathNormalizer{
    static normalizePath(originalPath, separator = path.sep){
        if (typeof originalPath !== "string") {
            throw new TypeError("Path must be a string")
        }
        let inputPath = originalPath.split(separator)
        let path = []
        path[0] = inputPath[0].startsWith(".")?inputPath[0].slice(2, inputPath[0].length) : inputPath[0]
        for(let i = 1; i < inputPath.length; ++i){
            if(inputPath[i] === ".."){
                   path = path.slice(0, path.length - 1)
              } else if(inputPath[i].includes(separator) && inputPath[i + 1] === ".." && i < inputPath.length ) {
                path.push(inputPath[i].slice(0, inputPath[i].lastIndexOf(separator)))
                ++i
            } else path.push(inputPath[i])

        }
        let filePath = path[0] + ""
        for(let i = 1; i < path.length; i++){
            if(path[i].startsWith(separator)){
                filePath += path[i]
            } else filePath += filePath.endsWith(separator)? path[i] : separator + path[i]
        }
        return filePath.startsWith(separator) ? filePath.slice(1, filePath.length) : filePath
    
    }
    
    static joinPaths(separator = path.sep, ...paths){
        for(let i = 0; i < paths.length; ++i){
            if(typeof paths[i] !== "string" ){
                throw new TypeError("Path must be a string")
            }
        }
        let str = ""
        for(let i = 0; i < paths.length; ++i){
            str += paths[i] + separator
        }
        return this.normalizePath(str,separator).slice(0,-1)
        

    }
}

module.exports = PathNormalizer