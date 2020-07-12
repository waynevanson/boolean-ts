export function and(a, b) {
    return (a && b);
}
export function or(a, b) {
    return (a || b);
}
export function not(a) {
    return !a;
}
export function nand(a, b) {
    return not(and(a, b));
}
export function nor(a, b) {
    return not(or(a, b));
}
export function xnor(a, b) {
    const x = and(a, b);
    const y = nor(a, b);
    return or(x, y);
}
export function xor(a, b) {
    return not(xnor(a, b));
}
