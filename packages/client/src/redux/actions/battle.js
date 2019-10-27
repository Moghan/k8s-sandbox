export const ATTACK = 'ATTACK';
export const SET_ORDER = 'SET_ORDER';
export const SET_TARGET = 'SET_TARGET';

export function attack() {
  return { type: ATTACK }
}

export function setOrder(order) {
  return { type: SET_ORDER, order }
}

export function setTarget(unit, target) {
  return { type: SET_TARGET, unit, target }
}