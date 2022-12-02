const API_URL = `${process.env.REACT_APP_API_URL}`;

export const request = async ( url, options = {}, contentType, customDomain) => {
    let method = 'get'; 
    if (options.method) {
        method = options.method.tolowerCase();
    }

    let newUrl = url;

}

export default request;