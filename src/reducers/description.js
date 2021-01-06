const initialState = {
    bId: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARD_ID":
            return {
                ...state,
                bId: action.payload
            };
        default:
            return state;
    }
};
