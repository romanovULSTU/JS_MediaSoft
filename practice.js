/** Основы JS */

function getType(input){
    return typeof input;
}
console.log(getType("2"));

/** Задание 2 */

// В консоль будет выведено:
// a
// undefined

// Сначала происходит проверка условия a || b. Оба a и b являются функциями, которые, как объекты, являются истинными значениями. Поэтому условие a || b будет истинным.
// Затем выполняется код в ветке ?, который представлен вызовом функции a(). В результате этого в консоль будет выведено "a".
// Однако, функция a() не возвращает никакого значения, поэтому возвращаемое значение в выражении a() : b() будет undefined.
// Наконец, результат выражения a || b ? a() : b() присваивается переменной c и выводится в консоль, что даст результат "undefined".
/** Функции  */

function count(num) {
    if (typeof num !== 'number') {
      num = 0;
    }
    function innerCount(nextNum) {
      if (typeof nextNum === 'number') {
        return count(num + nextNum);
      }
  
      return count(num);
    }
  
    innerCount.valueOf = function () {
      return num;
    }
    return innerCount;
}
console.log(count(3)(2)(1)(5)(7).valueOf());
console.log(count(3)(null)(1)('asad')().valueOf());


/** Объекты и Массивы */
/**Задание 1 */

// const arr = [1, null, 'test', undefined]
// function convertArrToObj(arr){
//     const result = {}
//     arr.forEach((index,el) => {
//         result[index] = el;
//     });
//     return result;
// }
// const obj = convertArrToObj(arr)
// console.log(obj);


/**Задание 2 */

// const arr = [1, 1, 1, 'test', 'test'];

// function countFromArr(arr) {
//     const result = {};
  
//     arr.forEach(el => {
//       if (result.hasOwnProperty(el)) {
//         result[el] += 1;
//       } else {
//         result[el] = 1;
//       }
//     });
  
//     return result;
//   }

// const res = countFromArr(arr);
// console.log(res);


/**Задание 3 */

const arr = [{test: 1}, {test: 2}, {test: 3}, {test: 1}, {test: 1}];
function groupByField(arr, fieldName) {
  const result = {};
  
  for (const obj of arr) {
    const fieldValue = obj[fieldName];
    
    if (!result[fieldValue]) {
      result[fieldValue] = [];
    }
    
    result[fieldValue].push(obj);
  }
  
  return result;
}
const res = groupByField(arr, 'test');
console.log(res);


/**Прототипы, наследование */

Number.prototype.plus = function(num) {
  return this + num;
};

console.log((1).plus(2)); // 3


/** Асинхронная работа в JS */ 
// Вывод в консоль будет следующим:

// start
// promise constructor
// final
// p2
// p4
// p5
// timeout