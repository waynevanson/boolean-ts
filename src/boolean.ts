import { And, Or, Not, Nand, Nor, Xnor, Xor } from "./types";

export function and<A extends boolean, B extends boolean>(
  a: A,
  b: B
): And<A, B> {
  return (a && b) as any;
}

export function or<A extends boolean, B extends boolean>(a: A, b: B): Or<A, B> {
  return (a || b) as any;
}

export function not<A extends boolean>(a: A): Not<A> {
  return !a as any;
}

export function nand<A extends boolean, B extends boolean>(
  a: A,
  b: B
): Nand<A, B> {
  return not(and(a, b));
}

export function nor<A extends boolean, B extends boolean>(
  a: A,
  b: B
): Nor<A, B> {
  return not(or(a, b));
}

export function xnor<A extends boolean, B extends boolean>(
  a: A,
  b: B
): Xnor<A, B> {
  const x = and(a, b);
  const y = nor(a, b);
  return or(x, y);
}

export function xor<A extends boolean, B extends boolean>(
  a: A,
  b: B
): Xor<A, B> {
  return not(xnor(a, b));
}
