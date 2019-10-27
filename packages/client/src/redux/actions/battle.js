export const ATTACK = 'ATTACK';
export const SET_ORDER = 'SET_ORDER';
export const SET_TARGET = 'SET_TARGET';
export const SET_PREVIOUS_STATE = 'SET_PREVIOUS_STATE';
export const SET_PHASE = 'SET_PHASE';
export const CREATE_EVENTS = 'CREATE_EVENTS';

export function attack() {
  return { type: ATTACK }
}

export function setOrder(order) {
  return { type: SET_ORDER, order }
}

export function setTarget(unit, target) {
  return { type: SET_TARGET, unit, target }
}

export function setPrevState() {
  return { type: SET_PREVIOUS_STATE }
}

export function setPhase(phase) {
  return { type: SET_PHASE, phase }
}

export function createEvents(events) {
  return { type: CREATE_EVENTS, events }
}