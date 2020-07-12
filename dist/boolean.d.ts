import { And, Or, Not, Nand, Nor, Xnor, Xor } from "./types";
export declare function and<A extends boolean, B extends boolean>(a: A, b: B): And<A, B>;
export declare function or<A extends boolean, B extends boolean>(a: A, b: B): Or<A, B>;
export declare function not<A extends boolean>(a: A): Not<A>;
export declare function nand<A extends boolean, B extends boolean>(a: A, b: B): Nand<A, B>;
export declare function nor<A extends boolean, B extends boolean>(a: A, b: B): Nor<A, B>;
export declare function xnor<A extends boolean, B extends boolean>(a: A, b: B): Xnor<A, B>;
export declare function xor<A extends boolean, B extends boolean>(a: A, b: B): Xor<A, B>;
