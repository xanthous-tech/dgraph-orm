# DGraph ORM

A decorator based object mapper, schema handler, mutation tracker to use with dgraph.

This library handles objects and their relation and generates mutation/deletion strings based on
changes. These strings can be used with any dgraph client to mutate the data.

# Getting started

```
yarn add @xanthous/dgraph-orm
```

Here is an example to create a new graph using some of the public APIs exposed by the ORM.

```typescript
import {
  Uid,
  Node,
  Property,
  Predicate,
  IPredicate,
  QueryBuilder,
  SchemaBuilder,
  TransactionBuilder
} from '@xanthous/dgraph-orm';

/**
 * A Node definition of person
 */
@Node()
class Person {
  @Uid()
  id: string;

  @Property()
  name: string;

  @Predicate({ type: () => Person })
  friends: IPredicate<Person>;
}

// Schema generated based on the node definitions.
const schema = SchemaBuilder.build();
console.log(schema);
// type Person {
//   Person.name: string
//   Person.friends: [Person]
// }
// Person.name: string .
// Person.friends: [uid] @count .

// Query builder can be used to easily create query fragments based on the definitions.
const { handle, fragment } = QueryBuilder.buildFragment(Person);
console.log(handle);
// ...personDataFragment

console.log(fragment);
// fragment personDataFragment {
//    Person.name
//    Person.friends
//    id
// }

// Create a transaction
const transaction = TransactionBuilder.build();

// Create some people
const john = transaction.nodeFor(Person);
const jane = transaction.nodeFor(Person);
const kamil = transaction.nodeFor(Person);

// A temporary uid is assigned during object creation.
console.log(john.id);
// b830c1f5ca09d466 ## random

// Change their names
john.name = 'John';
jane.name = 'Jane';
kamil.name = 'Kamil';

// Create connections between them
kamil.friends.add(jane);
kamil.friends.add(john);

// Create a mutation string to use with dgraph js client.
const mutation = transaction.getSetNQuadsString();
console.log(mutation);
// _:b830c1f5c787c210 <dgraph.type> "Person" .
// _:b830c1f5c787c210 <Person.name> "John"^^<xs:string> .
// _:b830c1f5c78a5947 <dgraph.type> "Person" .
// _:b830c1f5c78a5947 <Person.name> "Jane"^^<xs:string> .
// _:b830c1f5c78afce1 <dgraph.type> "Person" .
// _:b830c1f5c78afce1 <Person.name> "Kamil"^^<xs:string> .
// _:b830c1f5c78afce1 <Person.friends> _:b830c1f5c78a5947 .
// _:b830c1f5c78afce1 <Person.friends> _:b830c1f5c787c210 .
```

# Sponsors

Treelab

# License

[MIT](./LICENSE)
