export type And<A, B> = A extends true
  ? B extends true
    ? true
    : false
  : false;

export type Or<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
  ? true
  : false;

export type Not<A extends boolean> = A extends true ? false : true;
export type Nand<A extends boolean, B extends boolean> = Not<And<A, B>>;
export type Nor<A extends boolean, B extends boolean> = Not<Or<A, B>>;
export type Xor<A extends boolean, B extends boolean> = Not<Xnor<A, B>>;
export type Xnor<A extends boolean, B extends boolean> = Or<
  And<A, B>,
  Nor<A, B>
>;
