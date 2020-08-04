import axios from "axios";
import { GET, DELETE, POST, PUT } from '../constants/statusType'
import { testFetchStarted, testFetchError, testFetchSuccess, testDeleteError, testDeleteSuccess, testCreateSuccess } from '../redux/action/testAction'
import { API_URL_TEST } from '../env'

async function readApi(dispatch) {
    let resource = 'Comment'
    const options = {
        method: GET,
        url: `${API_URL_TEST}/${resource}`,
    };
    dispatch(testFetchStarted())
    try {
        let result = await axios(options)
        dispatch(testFetchSuccess(result))
        return result
    } catch (error) {
        dispatch(testFetchError())
    }

};

async function readSingleApi(dispatch, id) {
    let resource = 'Comment'
    const options = {
        method: GET,
        url: `${API_URL_TEST}/${resource}/${id}`,
    };
    dispatch(testFetchStarted())
    try {
        let result = await axios(options)
        dispatch(testFetchSuccess(result))
        return result
    } catch (error) {
        dispatch(testFetchError())
    }

};

async function createApi(dispatch, values) {
    let resource = 'Comment'
    const options = {
        method: POST,
        url: `${API_URL_TEST}/${resource}`,
        data: values
    };
    try {
        let result = await axios(options)
        dispatch(testCreateSuccess(values))
        return result
    } catch (error) {
        dispatch(testFetchError())
    }

};
async function updateApi(dispatch, values, id) {
    let resource = 'Comment'
    const options = {
        method: PUT,
        url: `${API_URL_TEST}/${resource}/${id}`,
        data: Object.assign(
            {
                id: id,
                categoryId: 0
            },
            values
        )
    };
    return await axios(options);
};



async function deleteApi(dispatch, id) {
    let resource = 'Comment'
    const options = {
        method: DELETE,
        url: `${API_URL_TEST}/${resource}/${id}`
    };
    try {
        let result = await axios(options)
        dispatch(testDeleteSuccess(id))
        return result
    } catch (error) {
        dispatch(testDeleteError())
    }
};



export { readApi, readSingleApi, deleteApi, createApi, updateApi };