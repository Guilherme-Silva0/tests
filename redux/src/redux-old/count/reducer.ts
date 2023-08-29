import { Reducer } from 'redux'
import { countActionTypes } from './actionsTypes'

const initialState = {
  count: 0,
}

export const countReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case countActionTypes.ADD:
      return { ...state, count: state.count + 1 }

    case countActionTypes.REMOVE:
      return { ...state, count: state.count - 1 }

    default:
      return state
  }
}
