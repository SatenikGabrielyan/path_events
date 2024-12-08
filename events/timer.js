const EventEmmiter = require("node:events")

class Timer extends EventEmmiter{
    #duration
    constructor(duration){
        super()
        this.setDuration(duration)
    }
    setDuration(value){
        if(typeof value != "number" || !Number.isInteger(value) || value <= 0){
            throw new Error("Duration must be a positive integer")
        }
        this.#duration = value
    }
    start(){
        this.emit("start")
        let time = this.#duration
        while(time >= 0){
            this.emit("tick", time)
            if(time == 0){
                this.emit("end")
            }
            const startedTime = Date.now()
            while(Date.now() - startedTime < 1000){
            }
            --time
        }
    }
}


module.exports = Timer