// 클래스 선언문
class Person1 {
  name: string
  age?: number
}

let ssabi: Person1 = new Person1()
ssabi.name = 'ssabi'
ssabi.age = 29
console.log(ssabi)

// 생성자
class Person2 {
  constructor(public name: string, public age?: number) { }
}
let ssabi2: Person2 = new Person2('ssabi', 29)
console.log()

class Person3 {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
  }
}
let ssabi3: Person3 = new Person3('ssabi', 29)
console.log(ssabi3)

// 인터페이스 구현
interface IPerson4 {
  name: string
  age?: number
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) { }
}
let ssabi4: IPerson4 = new Person4('ssabi', 29)
console.log(ssabi4)

// 추상 클래스
abstract class AbstractPerson5 {
  abstract name: string
  constructor(public age?: number) { }
}

// 클래스의 상속
class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age)
  }
}
let ssabi5: Person5 = new Person5('ssabi', 29)
console.log(ssabi5)

// static 속성
class A {
  static initValue = 1
}

let initVal = A.initValue // 1