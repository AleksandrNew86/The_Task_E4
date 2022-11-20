
//Задание 5: Переписать консольное приложение из предыдущего юнита на классы.

class Apparatus{
    constructor (name, power) {
        this.name = name;
        this.power = power;
        this.turnOff = true;
    }

    turnOff () {
        this.turnOff = true;
    }
    turnOn () {
    this.turnOff = false;
    }

    powerSocket () {
        if (!this.turnOff) {
            console.log(`The power of connected ${this.name} is ${this.power}`);
        } else {
        console.log(`${this.name} is turned off`);
        }
    }
}


class Computer extends Apparatus {
    constructor (name, power, processor, RAM) {
        super(name, power);
        this.turnOff = true;
        this.processor = processor;
        this.RAM = RAM;
    }

    checkApp (RAM_app) {
        if (this.RAM >= RAM_app){
            console.log('You can setup this app');
        } else {
            console.log('You can\'t setup this app');
        }
    }

}


class TableLamp extends Apparatus {
    constructor(name, power, brightness, typeLamp) {
        super(name, power);
        this.turnOff = true;
        this.brightness = brightness;
        this.typeLamp = typeLamp;
    }

    checkPowerLamp (powerLamp) {
        if (this.power >= powerLamp){
            console.log('You can use this lamp');
        } else {
            console.log('You can\'t use this lamp');
        }
    }
}


const newComp = new Computer('HomeWork', 500, 'Athlon', 3 );
const newLamp = new TableLamp('XiaomiLight', 25, 150, 'diod' );

newComp.turnOn();
newComp.checkApp(2);
newLamp.checkPowerLamp(26);
newComp.powerSocket();
newLamp.powerSocket();

let newsocket = new Apparatus('socket', 2000)

console.log(Object.getPrototypeOf(TableLamp))