import { SWITCHLANGUAGE } from '../constants'

export const switchLanguage = (data) => {
  return dispatch => {
    dispatch({
      type: SWITCHLANGUAGE,
      value: data
    })
  }
}