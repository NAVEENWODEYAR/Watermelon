// creating the action types.,,
let Incr = 'Incr';
let Decr = 'Decr';

let incrAction = () => {
    return ({ type: Incr});
}

let decrAction = () => {
    return ({ type: Decr});
}

export {Incr, Decr, incrAction, decrAction};