import env from "../env";
import axios from "axios";
import { GET } from '../constants/statusType'
import { testFetchStarted, testFetchError, testFetchSuccess } from '../redux/action/testAction'

async function fetchApi(dispatch) {
    let resource = 'Comment'
    const options = {
        method: GET,
        url: `${env.backend_url}/${resource}`,
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
// async function fetchSingleApi(resource, method, id) {
//     const options = {
//         method: method,
//         url: `${env.backend_url}/${resource}/${id}`
//     };
//     return await axios(options);
// };
// async function deleteApi(resource, method, id) {
//     const options = {
//         method: method,
//         url: `${env.backend_url}/${resource}/${id}`
//     };
//     return await axios(options)

// };
// async function updateApi(resource, method, values, id) {
//     const options = {
//         method: method,
//         url: `${env.backend_url}/${resource}/${id}`,
//         data: Object.assign(
//             {
//                 id: id,
//                 categoryId: 0
//             },
//             values
//         )
//     };
//     return await axios(options);
// };
// async function searchApi(resource, method, values) {
//     const options = {
//         method: method,
//         url: `${env.backend_url}/${resource}/Search?term=${values}`
//     };
//     return await axios(options);
// };
export { fetchApi };