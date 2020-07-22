const TEST_FETCH_START = "TEST_FETCH_START";
const TEST_FETCH_ERROR = "TEST_FETCH_ERROR";
const TEST_FETCH_SUCCESS = "TEST_FETCH_SUCCESS";

export const testFetchStarted = () => {
    return {
        type: TEST_FETCH_START,
    };
};
export const testFetchError = () => {
    return {
        type: TEST_FETCH_ERROR,
    };
};
export const testFetchSuccess = (result) => {
    return {
        type: TEST_FETCH_SUCCESS,
        payload: result
    };
};


