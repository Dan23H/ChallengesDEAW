export const TodoReducer = (initialState = [], action) => {
    switch (action.type){
        case 'ABC':
            throw new Error('action not yet implemented')
            break;
        case '[TODO] ADD todo':
            return [...initialState, action.payload]
        default:
            return initialState;
    }
}