import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * There are two possible solutions to this problem - and it's
 * to do with the way you specify the generic. Can you get
 * both solutions?
 */
// const typedObjectKeys = <TObject extends {}>(obj: TObject) => {
//   return Object.keys(obj) as Array<keyof TObject>;
// };

const typedObjectKeys = <TKeys extends string>(obj: Record<TKeys, any>) => {
  return Object.keys(obj) as Array<TKeys>;
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
