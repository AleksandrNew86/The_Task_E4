/*
Задание 1: Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/

function getPropertyObject(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

/*
Задание 2: Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

function isKeyInObject(str, obj){
    let a;
    str in obj ? a = true : a = false;
    return a;
  }

/*
Задание 3: Написать функцию, которая создает пустой объект, но без прототипа.
*/

function createObjectNoprototype() {
    let obj = {}
    obj.__proto__ = null;
    return obj;
}
console.log(createObjectNoprototype().__proto__)
