// create the actin types.,
let Increment ='Increment';
let Decrement = 'Decrement';

let incrAction = () => {
    console.log("Step-2, Invoking the reducer..,");
    return({ type: Increment});
}

let decrAction = () => {
    return({ type : Decrement});
}

export {incrAction, decrAction, Increment, Decrement };