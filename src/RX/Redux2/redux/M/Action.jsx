// create the action types.,
let Inc = 'Inc';
let Dec = 'Dec';

let IncrAction = () => {
    return ({ type : Inc});
}
let DecrAction = () => {
    return ({ type : Dec})
}

export {Inc, Dec, IncrAction, DecrAction};