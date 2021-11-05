import { Bird, Fish } from "./BirdAndFish"

export const flyOrSwim = (o: Bird | Fish): void => {
  if (o instanceof Bird) {
    // (o as Bird).fly() // 혹은 (<Bird>o).fly()
    o.fly()
  } else if (o instanceof Fish) {
    // (<Fish>o).swim()  // 혹은 (o as Fish).swim()
    o.swim()
  }
}