
import {
    testFetchStarted, testFetchError, testFetchSuccess, testDeleteError, testDeleteSuccess, testCreateSuccess
} from '../action/testAction';
import { PENDING, LOADED, LOADING, ERROR, DELETE, CREATED } from '../../constants/statusType'

const initialsState = { test: [], status: PENDING };
export default (state = initialsState, action) => {
    switch (action.type) {
        case testFetchStarted().type:
            return { test: [], status: LOADING };
        case testFetchSuccess().type:
            return { test: action.payload, status: LOADED };
        case testFetchError().type:
            return { test: [], status: ERROR };
        case testDeleteSuccess().type:
            return {
                test: state.test.data.resultData.filter(tes => {
                    return tes.id !== action.payload;
                }), status: DELETE
            };
        case testCreateSuccess().type:
            return { test: action.payload, ...state, status: CREATED };
        case testDeleteError().type:
            return { test: [], status: ERROR };
        default:
            return state;
    }
};

