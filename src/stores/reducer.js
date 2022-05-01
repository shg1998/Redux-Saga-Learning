const initState = {
    number : 19
}

const reducer = (state=initState,action) => {
    const newState = {...state};
    switch (action.type) {
        case "ADD_NUM_ASYNC":
            newState.number += action.value;
            break;
        case  "MINUS_NUM":
            newState.number -= action.value;
            break;
    }
    return newState;
}


export  default reducer;