
import {
    testFetchStarted, testFetchError, testFetchSuccess
} from '../action/testAction';
import { PENDING, LOADED, LOADING, ERROR } from '../../constants/statusType'

const initialsState = { test: [], status: PENDING };
export default (state = initialsState, action) => {
    switch (action.type) {
        case testFetchStarted().type:
            return { test: [], status: LOADING };
        case testFetchSuccess().type:
            return { test: action.payload, status: LOADED };
        case testFetchError().type:
            return { test: [], status: ERROR };
        default:
            return state;
    }
};