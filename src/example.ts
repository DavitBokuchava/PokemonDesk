// Напиши тип функции, конкатенирующей две строки
function concat(a: string, b: string): string {
  return `${a} ${b}`;
}
concat('Hello', 'Wolrd');

function toCapitalizeFirstLetter(str: string) {
  return str.replace(str[0], str[0].toUpperCase());
}
export default toCapitalizeFirstLetter;
// Напиши интерфейс для описания следующих данных

// const myHometask = {
//   howIDoIt: 'I Do It Wel',
//   simeArray: ['string one', 'string two', 42],
//   withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
// };
// interface MyHometask {
//   howIDoIt: string;
//   simeArray: { [index: number]: number | string };
//   withData: { [index: number]: { howIDoIt: MyHometask['howIDoIt']; simeArray: MyHometask['howIDoIt'] } };
// }

// // В уроке про Generics мы написали интерфейс массива MyArray...

// // Добавь типизацию для метода reduce

// interface MyArray<T> {
//   [N: number]: T;

//   reduce<A>(fn: (acc: T, curr: T, index: number, arr: T[]) => A): A;

// }
//    reduce<A>(fn:(acc:T,curr:T,index:number,arr:T[])=>A,init:number):A;
