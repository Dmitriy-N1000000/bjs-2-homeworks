class AlarmClock{
	constructor(){
		this.alarmCollection = [],
		this.intervalId = null
	}
	addClock(time, callback) {   // добавляет новый звонок в коллекцию существующих 
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}
		if (this.alarmCollection.find(item => item.time === time ) ){
			console.warn('Уже присутствует звонок на это же время')
		} 
		return this.alarmCollection.push({callback, time, canCall: true})
	};
	removeClock(time){  // удаляет звонки по определённому времени.
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time)
	};  
	getCurrentFormattedTime(){  // возвращает текущее время в строковом формате `HH:MM`
		let data = new Date();
		let hour = data.getHours();
		let minutes = data.getMinutes();
		return hour + ':'+ (minutes < 10 ? '0' + minutes : minutes);
	};  
	start(){  // запускает будильник
		if(!!this.intervalId) {
			return null;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((item) => {
				if(item.time === this.getCurrentFormattedTime() && item.canCall) {
					item.canCall = false;
					item.callback();
				}
			})
		}, 1000)
	};
	stop(){  // останавливает выполнение интервала будильника
		clearInterval(this.intervalId);
		this.intervalId = null;
	};
	resetAllCalls(){  // сбрасывает возможность запуска всех звонков
		this.alarmCollection = this.alarmCollection.map((item) => ({...item, canCall: true}))
	};
	clearAlarms(){  // удаляет все звонки
		this.stop();
		this.alarmCollection = [];
	};

}

let clock = new AlarmClock();
const callback = f => f;
clock.addClock("16:45", callback)