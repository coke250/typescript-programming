Promise.resolve(1)
  .then((value: number) => {
    console.log(value)
    return Promise.resolve(true)
  })
  .then((value: boolean) => {
    console.log(value)
    return [1, 2, 3]
  })
  .then((value: number[]) => {
    console.log(value)
    return { name: 'ssabi', age: 29 }
  })
  .then((value: { name: string, age: number }) => {
    console.log(value)
  })