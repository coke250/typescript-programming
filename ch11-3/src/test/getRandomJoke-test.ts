import * as R from 'ramda'
import { getRandomJoke, JokeType } from '../getRandomJoke'

getRandomJoke()
  .then((JokeItem: JokeType) => {
    // @ts-ignore
    const joke = R.view(R.lensProp('joke'))(JokeItem)
    console.log(joke) // Chunk Norris doesn't need an OS
  })
  .catch((e: Error) => console.log(e.message))