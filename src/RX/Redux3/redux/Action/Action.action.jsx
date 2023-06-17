// create the action types..,
let Increment = 'Increment';
let Decrement = 'Decrement';

let IncrAction = () => {
    return({type : Increment});
}

let DecrAction = () => {
    return({ type : Decrement});
}

export {IncrAction, DecrAction, Increment, Decrement};