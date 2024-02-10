class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!callback() && !time) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        this.alarmCollection.some(call => {call.time === time
            if(call.time === time) {
                console.warn("Уже присутствует звонок на это же время");
            }
        })

        this.alarmCollection.push({time, callback, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(callTime => callTime.time !== time)
        
    }

    getCurrentFormattedTime() {
        const currentTime = new Date();
        return currentTime.toLocaleTimeString("ru-MO", { hour: "2-digit", minute: "2-digit" });
    }

    start() {
        if (this.intervalId) {
            return
        }
        
        setInterval(() => {
            this.intervalId = this.alarmCollection.forEach(element => {
                if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                element.canCall = false; 
                element.callback();
            } 
            })
            }, 1000)                    
        }
    

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true);
    }

    clearAlarms(){
        stop()
        this.alarmCollection = [];
    }
}