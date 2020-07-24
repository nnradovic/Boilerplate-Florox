import { TEST_FETCH_SUCCESS, TEST_FETCH_START, TEST_FETCH_ERROR, TEST_DELETE_SUCCESS, TEST_DELETE_START, TEST_DELETE_ERROR, TEST_CREATE_SUCCESS } from '../../constants/statusType'

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

export const testDeleteStarted = () => {
    return {
        type: TEST_DELETE_START,
    };
};
export const testDeleteError = () => {
    return {
        type: TEST_DELETE_ERROR,
    };
};
export const testDeleteSuccess = (id) => {
    return {
        type: TEST_DELETE_SUCCESS,
        payload: id
    };
};

export const testCreateSuccess = (values) => {
    return {
        type: TEST_CREATE_SUCCESS,
        payload: values
    };
};


