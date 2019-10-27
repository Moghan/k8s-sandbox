import { arch, inf1, inf2 } from '../../stubs';

import {
    SET_ORDER,
    SET_TARGET,
    ATTACK
} from '../actions/battle'

const initialState = {
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
            
            unit = {
                ...unit,
                order: {
                    ...unit.order,
                    target: action.target
                }
            }
            units = [...units, unit].sort(sortFn);

            console.log("new units", units);

            return ({
                ...state,
                units
            })
        case SET_ORDER:
            console.log("attacking");
            return ({
                ...state,
                order: action.order
            })
      default:
        return state
    }
}

export { battleEngine };