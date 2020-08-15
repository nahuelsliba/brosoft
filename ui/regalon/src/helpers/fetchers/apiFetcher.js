const baseUrlLocalhost = 'http://localhost:8081/api/';
const baseUrlLocalhostHttps = 'https://localhost:44383/api/';
const baseUrl = baseUrlLocalhost;

const getFetch = async (serviceUrl, queryParams) => {
    let endpoint = baseUrl + serviceUrl;
    if (queryParams != null) {
        endpoint = endpoint + '?' + queryParams;
    }
    console.log('fetching: ' + endpoint);
    return await fetch(endpoint);
}

const postFetch = async (serviceUrl, requestBody) => {
    let endpoint = baseUrl + serviceUrl;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    console.log('fetching: ' + endpoint);
    const requestPromise = await fetch(endpoint, requestOptions);
    return requestPromise.json();
}

const putFetch = async (serviceUrl, requestBody) => {
    let endpoint = baseUrl + serviceUrl;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    console.log('fetching: ' + endpoint);
    return await fetch(endpoint, requestOptions);
}

const deleteFetch = async (serviceUrl) => {
    let endpoint = baseUrl + serviceUrl;
    const requestOptions = {
        method: 'DELETE'
    };
    console.log('fetching: ' + endpoint);
    return await fetch(endpoint, requestOptions);
}
 
export { getFetch, postFetch, putFetch, deleteFetch };
