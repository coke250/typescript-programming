import { Identity } from "../classes/Identity"
type Person = { name: string, age: number }
const ssabi = Identity.of(['ssabi', 29])

console.log(
  ssabi
    .map(([name, age]) => ({ name, age }))
    .chain((p: Person) => Identity.of(p))
    .map(({ name, age }) => [name, age])
    .value()[0] == ssabi.value()[0] // true
)