import { create } from './create'

class Point { constructor(public x: number, public y: number) { } }
[
  create(Date),         // 2021-11-03T15:41:19.538Z
  create(Point, 0, 0)   // Point { x: 0, y: 0 }
].forEach(s => console.log(s))