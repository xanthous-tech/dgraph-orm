import { QueryBuilder, Facet, Node, Uid, Property, Predicate} from '../src';


test('Should work', () => {
  class PersonKnows {
    @Facet()
    familiarity: number;
  }

  @Node()
  class Person {
    @Uid()
    id: string;

    @Property()
    name: string;

    @Predicate({ type: () => Person, facet: PersonKnows })
    friends: Predicate<Person, PersonKnows>;
  }

  const { handle, fragment } = QueryBuilder.buildFragment(Person);

  expect(handle).toEqual('...personDataFragment');
  expect(fragment.split('\n').length).toEqual(5)

});
