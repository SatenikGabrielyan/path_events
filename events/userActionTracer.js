const EventEmmiter = require("node:events")

class UserActionTracer extends EventEmmiter{
    constructor(){
        super()
        this.actions = []
    }
    logAction(action){
        this.actions.push(action)
        this.emit("actionLogged", action)
        if(this.actions.length > 5){
            this.emit("maxAction", this.actions.length)
        }
    }
    getActionCount(){
        return this.actions.length
    }
}

module.exports = UserActionTracer

