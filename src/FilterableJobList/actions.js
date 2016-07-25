export const toggleFulltime = () => {
  return {
    type: 'TOGGLE_FULLTIME',
    payload: {}
  }
}

export const toggleParttime = () => {
  return {
    type: 'TOGGLE_PARTTIME',
    payload: {}
  }
}

export const changeKeyword = (keyword) => {
  return {
    type: 'CHANGE_KEYWORD',
    payload: {keyword}
  }
}
