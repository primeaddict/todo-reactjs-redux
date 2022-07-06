export const SUCCESS = "SUCCESS"
export const REQUEST = "REQUEST"
export const RESET = "RESET"
export const FAILURE = "FAILURE"

export const createRequestTypes = base => {
    return [RESET, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};