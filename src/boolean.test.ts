import * as b from ".";

type ThreeDistinct = "none" | "some" | "all";
type TwoInput = "00" | "01" | "10" | "11";

interface InputTable extends Record<ThreeDistinct, boolean> {}

type Test = {
  name: string;
  f: (a: boolean, b: boolean) => boolean;
  tables: TruthTable[];
};

interface TruthTable {
  twoinput: TwoInput;
  A: boolean;
  B: boolean;
  AB: boolean;
}

function makeTruthTable({ none, some, all }: InputTable): TruthTable[] {
  return [
    { twoinput: "00", A: false, B: false, AB: none },
    { twoinput: "01", A: false, B: true, AB: some },
    { twoinput: "10", A: true, B: false, AB: some },
    { twoinput: "11", A: true, B: true, AB: all },
  ];
}

const and = makeTruthTable({ none: false, some: false, all: true });
const or = makeTruthTable({ none: false, some: true, all: true });
const nand = makeTruthTable({ none: true, some: true, all: false });
const nor = makeTruthTable({ none: true, some: false, all: false });
const xor = makeTruthTable({ none: false, some: true, all: false });
const xnor = makeTruthTable({ none: true, some: false, all: true });

const tests: Test[] = [
  { name: "and", f: b.and, tables: and },
  { name: "or", f: b.or, tables: or },
  { name: "nor", f: b.nor, tables: nor },
  { name: "nand", f: b.nand, tables: nand },
  { name: "exor", f: b.xor, tables: xor },
  { name: "exnor", f: b.xnor, tables: xnor },
];

describe.each(tests)("boolean", ({ f, tables, name }) => {
  describe.each(tables)(name, ({ twoinput, A, B, AB }) => {
    test(`${twoinput}: A as "${A}" and B as "${B}" should return "${AB}"`, () => {
      expect(f(A, B)).toBe(AB);
    });
  });
});
