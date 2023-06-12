// creating the action types..,
let Increment = 'Increment';
let Decrement = 'Decrement';

let incrAction = () => {
    return({ type : Increment});
}

let decrAction = () => {
    return({ type : Decrement});
}

export {incrAction,decrAction,Increment,Decrement};