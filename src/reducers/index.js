import { SWITCHLANGUAGE } from '../constants'

export const initialState = {
  language: 'zh'
}

export const counter = (state = initialState, action) => {
  switch (action.type) {

    case SWITCHLANGUAGE:
      return {
        ...state,
        language: action.value
      }


    default:
      return {...state}
  }
}
