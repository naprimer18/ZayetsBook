/* eslint-disable no-unused-expressions */

export const isAutorizationed = (state = { isAutorizationed: false }, action) => {
    console.log('check is working')
    console.log(action)
    switch(action.type) {
        case 'logIn': {
            return {...state, isAutorizationed: true}
        }
        case 'logOut': {
            return {...state, isAutorizationed: false}
        }
        default:
            state;
    }
    return state;
};