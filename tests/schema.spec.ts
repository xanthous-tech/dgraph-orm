import { Node, Predicate, getGlobalDgraphSchema } from "../src";
import { clearAllStorage } from "../src/storage";

beforeEach(() => {
  clearAllStorage();
});

test("schema check", () => {
  @Node()
  class Person {
    @Predicate()
    name: string;
  }

  // Bypass no unused locals.
  Person;

  console.log(getGlobalDgraphSchema());
});
