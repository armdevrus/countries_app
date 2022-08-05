import { CLEAN_CONTROLS, SET_REGION, SET_SEARCH } from "./controls_actions"

const initialState = {
    search: '',
    region: ''
}

export const controlsReducer = (state = initialState, { type, payload}) => {
    switch(type){
        case SET_SEARCH: {
            return {
                ...state,
                search: payload
            }
        }
        case SET_REGION: {
            return{
                ...state,
                region: payload
            }
        }
        case CLEAN_CONTROLS: {
            return initialState
        }
        default: {
            return state
        }
    }
}