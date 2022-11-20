//Задание 4: Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

function Apparatus(name, power){
    this.name = name;
    this.power = power;
    this.turnOff = true;
}


Apparatus.prototype.turnOff = function (){
    this.turnOff = true;
}

Apparatus.prototype.turnOn = function (){
    this.turnOff = false;
}

Apparatus.prototype.powerSocket = function (){
    if (!this.turnOff) {
        console.log(`The power of connected ${this.name} is ${this.power}`);
    } else {
    console.log(`${this.name} is turned off`);
    }
}

function Computer(name, power, processor, RAM){
    this.name = name;
    this.power = power;
    this.turnOff = true;
    this.processor = processor;
    this.RAM = RAM;
}

Computer.prototype = new Apparatus();
Computer.prototype.checkApp = function (RAM_app) {
    if (this.RAM >= RAM_app){
        console.log('You can setup this app');
    } else {
        console.log('You can\'t setup this app');
    }
}

function TableLamp (name, power, brightness, typeLamp) {
    this.name = name;
    this.power = power;
    this.turnOff = true;
    this.brightness = brightness;
    this.typeLamp = typeLamp;
}

TableLamp.prototype = new Apparatus();

TableLamp.prototype.checkPowerLamp = function (powerLamp) {
    if (this.power >= powerLamp){
        console.log('You can use this lamp');
    } else {
        console.log('You can\'t use this lamp');
    }
}