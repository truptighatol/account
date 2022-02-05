export const deposit = (payload) => {
    return {
        type: "DEPOSIT",
        payload: payload
    };
};
export const withdraw = (payload) => {
    return {
        type: "WITHDRAW",
        payload: payload
    };
};
