const Timer = require("./events/timer")
const UserActionTracer = require("./events/userActionTracer")
const PathAnalyzer = require("./path/pathanalyzer")
const PathNormalizer = require("./path/pathnormalizer")

//test Timer class
let timer = new Timer(5)
timer.on("start", () => {
    console.log("Timer started")
})
timer.on("tick", (time) => {
    console.log(`tick ${time}`)
})
timer.on("end", () => {
    console.log("Timer ended")
})
timer.start()

//test UserActionTracer class
const tracer = new UserActionTracer()
tracer.on("actionLogged", (action) => {
    console.log(`Action logged ${action}`)
})
tracer.on("maxAction",(count) => {
    console.log(`Maximum actions ${count}`)
})
tracer.logAction("login")
tracer.logAction("viewProfile")
tracer.logAction("logout")
tracer.logAction("updateProfile")
tracer.logAction("changePassword")
tracer.logAction("changeLogin")

//test PathAnalyzer class
console.log(PathAnalyzer.getBaseName("/home/user/documents/report.pdf"))
console.log(PathAnalyzer.getDirName("/home/user/documents/report.pdf"))
console.log(PathAnalyzer.getExtension("/home/user/documents/report.pdf"))
console.log(PathAnalyzer.isAbsolutePath("/home/user/documents/report.pdf"))

//test PathNormalizer class
console.log(PathNormalizer.normalizePath("./user/../user///documents//file.txt"))
console.log(PathNormalizer.joinPaths("/","./home", "//user", "documents", "file.txt"))//first parameter separator,remaining arguments are strings