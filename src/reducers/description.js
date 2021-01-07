const initialState = {
    bId: undefined,
    book: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARD_ID":
            return {
                ...state,
                bId: action.payload
            };
        case "SET_BOOK_CARD":
            return {
                ...state,
                book: action.payload
            }
        default:
            return state;
    }
};
