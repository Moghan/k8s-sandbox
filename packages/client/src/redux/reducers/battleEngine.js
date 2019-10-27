import { arch, inf1, inf2 } from '../../stubs';

import {
    SET_ORDER,
    SET_TARGET,
    SET_PREVIOUS_STATE,
    SET_PHASE,
    CREATE_EVENTS,
} from '../actions/battle'

const initialState = {
    round: 0,
    phase: "initial",
    units: [arch, inf2, inf1],
    pOne: {
        army: {
            units: [arch, inf2]
        }
    },
    pTwo: {
        army: {
            units: [inf1]
        }
    }
};

const sortFn = (a, b) => (a.id - b.id);

const battleEngine = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENTS:
            console.log("create eve", action.events);
            return {
                ...state,
                events: action.events
            }
        case SET_PHASE:
            return {
                ...state,
                phase: action.phase,
            }
        case SET_PREVIOUS_STATE:
            return {
                ...state,
                round: state.round + 1,
                prevState: state
            }
        case SET_ORDER:
            console.log("setting order");
            return ({
                ...state,
                order: action.order
            })
        case SET_TARGET:
            console.log("unit list", state.units);
            let unit = state.units.find((u) => u.id === action.unit);
            let units = state.units.filter((u) => u.id !== action.unit);
            console.log("find unit", unit, "action", action);
            const target = state.units.find((u) => u.id === action.target);
            const order = target.armyId === unit.armyId ? "def" : "att";

            unit = {
                ...unit,
                order: {
                    order,
                    target: action.target
                }
            }
            units = [...units, unit].sort(sortFn);

            console.log("new units", units);

            return ({
                ...state,
                units
            })
      default:
        return state
    }
}

export { battleEngine };