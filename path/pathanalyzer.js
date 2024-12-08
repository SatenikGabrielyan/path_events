const path = require("node:path")
const findSeparator = require("../utils/utils")

class PathAnalyzer{
    static getBaseName(filePath){
        if(typeof filePath !== "string"){
            throw new TypeError("Filepath must be a string")
        }
        const separator = findSeparator(filePath)
        if(!separator){
            throw new Error("Incorrect filepath")
        }
        return filePath.split(separator).at(-1)

    }
    static getDirName(filePath){
        if(typeof filePath !== "string"){
            throw new TypeError("Filepath must be a string")
        }
        const separator = findSeparator(filePath)
        if(!separator){
            throw new Error("Incorrect filepath")
        }
        return filePath.split(separator)
                .slice(0, filePath.split(separator).length - 1).join(separator)

    }
    static getExtension(filePath){
        if(typeof filePath !== "string"){
            throw new TypeError("Filepath must be a string")
        }
        if(!filePath){
            return ""
        }
        return filePath.slice(filePath.lastIndexOf(".", filePath.length))

    }
    static isAbsolutePath(filePath){
        if(typeof filePath !== "string"){
            throw new TypeError("Filepath must be a string")
        }
        const separator = findSeparator(filePath)
        if(!separator){
            throw new Error("Incorrect filepath")
        }
        return filePath.startsWith(separator)
    }

}

module.exports = PathAnalyzer
