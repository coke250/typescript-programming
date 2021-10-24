let arr: number[] = [1, 2, 3, 4, 5]
let [first, second, third, ...rest] = arr
console.log(first, second, third, rest)