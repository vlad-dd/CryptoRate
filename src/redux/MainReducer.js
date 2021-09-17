const SET_CRYPTO_DATA = 'SET_CRYPTO_DATA'

let initialState = {
    data: []

}

let MainReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_CRYPTO_DATA: {
            return {
                ...state, 
                data: action.data
            }
        }
        default:
            return state
    }
}

export let setCryptoDataActionCreator = (value) => {
    return {
        type: SET_CRYPTO_DATA,
        data: value
    }
}

export default MainReducer;