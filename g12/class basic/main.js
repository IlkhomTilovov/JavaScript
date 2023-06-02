// class Person {
//   constructor(name) {
//     console.log(name,this);
//   }
//   name = "Weebrain";
//   title = "Eshmat";
// }
// let usr1 = new Person("Webbrain");
// console.log(usr1);

// class Calculotor {
//   constructor(action) {
//     if (action === "plus") this.action = "+";
//     if (action === "minus") this.action = "-";
//     if (action === "multiply") this.action = "*";
//   }
//   Calc(...res) {
//     return eval(res.join(this.action));
//   }
// }

// let plus = new Calculotor("plus");
// let minus = new Calculotor("minus");
// let multiply = new Calculotor("multiply");

// console.log(plus.Calc(1, 2, 3, 4));
// console.log(minus.Calc(1, 2, 3, 4));
// console.log(multiply.Calc(1, 2, 3, 4));

// class Parent {
//   parent() {
//     return "parent";
//   }
// }

// class Child extends Parent {
//   child() {
//     return "child";
//   }
// }

// const child = new Child();

// console.log(child.parent());

// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================

// 27.05.2023   4/5

// const findUniq = (array) => {
//   return array.reduce((a, b) => {
//     if (a.indexOf(b) === -1) {
//       a.push(b);
//     }
//     return a;
//   }, []);
// };
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// // console.log(findUniq([0, 0, 0.55, 0, 0]));

// ============================================================================

// 2 toq valularni tartiblang

// const toqSon = (arr) => {
//   let toq = [];
//   let index = [];
//   for (i in arr) {
//     if (arr[i] % 2 == 1) {
//       toq.push(arr[i]);
//       index.push(Number(i));
//     }
//   }
//   toq = toq.sort((a, b) => a - b);
//   for (j in toq) {
//     arr[index[j]] = toq[j];
//   }
//   console.log(arr);
// };

// toqSon([7, 1]);
// toqSon([5, 8, 6, 3, 4]);
// toqSon([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// ============================================================================

// 3. valuelar yigindisini toping
// const arrayPlusArray = (a, b) => {
//   let res = a.concat(b);
//   return res.reduce((a, b) => {
//     return a + b;
//   }, 0);
// };

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // 15
// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); //2100

// ============================================================================

// const getAverage = (arr) => {
//   let sum = 0;
//   for (let i of arr) {
//     sum += i;
//   }
//   return Math.floor(sum / arr.length);
// };

// console.log(getAverage([2, 2, 2, 2])); // 2);
// console.log(getAverage([1, 2, 3, 4, 5])); // 3);
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1)

// ============================================================================

// const removeEveryOther = (arr) => {
//   arr.map((a, b) => {
//     if (b % 2 === 0) {
//       console.log(a);
//     }
//   });
// };

// removeEveryOther(["Hello", "Goodbye", "Hello Again"]);
// removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //,=>  [1, 3, 5, 7, 9]);
// removeEveryOther([[1, 2]]); //,=>  [[1, 2]]);
// removeEveryOther([["Goodbye"], { Great: "Job" }]); //,=>  [['Goodbye']]);

let uniqK = 0;
let uniqK1 = 0;
function uniq(items) {
  items.filter((elem) => {
    if (elem == uniqK) {
      uniqK1 = elem;
    } else {
      if (uniqK == uniqK1) {
        uniqK = elem;
      }
    }
  });

  return uniqK;
}

console.log(uniq([1, 1, 1, 2, 1, 1]));
console.log(uniq([0, 0, 0.55, 0, 0]));
