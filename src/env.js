
let API_URL_TEST

if (process.env.NODE_ENV === "development") {
    API_URL_TEST = "https://frontend-api-test-nultien.azurewebsites.net/api"
}
if (process.env.NODE_ENV === "test") {
    API_URL_TEST = "https://frontend-api-test-nultien.azurewebsites.net/api/test"
}
if (process.env.NODE_ENV === "production") {
    API_URL_TEST = "https://frontend-api-test-nultien.azurewebsites.net/api/prod"
}

export { API_URL_TEST }