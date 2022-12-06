/* eslint-disable @typescript-eslint/indent */
import { getToken } from './token';
import { format as urlFormat, getDomain } from './urlFormat';

const API_URL = `${import.meta.env.REACT_APP_API_URL}`;
const getJsonOption = (method: any, body: null, accessToken: string | null) => {
  let option = {
    method,
    headers: {
      Accept: 'application/*',
      'Content-Type': 'application/json',
    },
    ...(body
      ? {
          body: JSON.stringify(body),
        }
      : {}),
  };

  if (accessToken) {
    option = {
      method,
      headers: {
        Accept: 'application/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      ...(body
        ? {
            body: JSON.stringify(body),
          }
        : {}),
    };
  }

  return option;
};

const getFormDataOption = (method, body, accessToken ) => {
  let option = {
    method,
    headers: {
      Accept: 'application/json',
      // TODO: FIX Content-Type for multipart
      'Content-Type': ' ',
    },
    ...(body
      ? {
          body,
        }
      : {}),
  };

  if (accessToken) {
    option = {
      method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      ...(body
        ? {
            body,
          }
        : {}),
    };
  }

  return option;
};
const fetchOpts = (method: string, body: any = null, isCustomDomain = false) => {
  let option = null;

  if (isCustomDomain) {
    if (body instanceof FormData || body instanceof Blob) {
      option = getFormDataOption(method, body, null);
    } else {
      option = getJsonOption(method, body, null);
    }
  } else {
    const accessToken = getToken();

    if (body instanceof FormData) {
      option = getFormDataOption(method, body, accessToken);
    } else {
      option = getJsonOption(method, body, accessToken);
    }
  }

  return option;
};

export const API = {
  get: (url: any, body: any, customDomain: any) => {
    if (customDomain) {
      if (getDomain(customDomain) !== getDomain(API_URL)) {
        return fetch(`${customDomain}${url}`, fetchOpts('GET', '', true));
      }
      return fetch(`${customDomain}`, fetchOpts('GET'));
    }
    return fetch(`${API_URL}${url}`, fetchOpts('GET'));
  },
  post: (url: any, data: null | undefined, customDomain: any) => {
    if (customDomain) {
      if (getDomain(customDomain) !== getDomain(API_URL)) {
        return fetch(`${customDomain}${url}`, fetchOpts('POST', data, true));
      }
      return fetch(`${customDomain}`, fetchOpts('POST', data));
    }
    return fetch(`${API_URL}${url}`, fetchOpts('POST', data));
  },
  put: (url: any, data: null | undefined, customDomain: any) => {
    if (customDomain) {
      if (getDomain(customDomain) !== getDomain(API_URL)) {
        return fetch(`${customDomain}${url}`, fetchOpts('PUT', data, true));
      }
      return fetch(`${customDomain}`, fetchOpts('PUT', data));
    }
    return fetch(`${API_URL}${url}`, fetchOpts('PUT', data));
  },
  patch: (url: any, data: null | undefined, customDomain: any) => {
    if (customDomain) {
      if (getDomain(customDomain) !== getDomain(API_URL)) {
        return fetch(`${customDomain}${url}`, fetchOpts('PATCH', data, true));
      }
      return fetch(`${customDomain}`, fetchOpts('PATCH', data));
    }
    return fetch(`${API_URL}${url}`, fetchOpts('PATCH', data));
  },
  delete: (url: any) => fetch(`${API_URL}${url}`, fetchOpts('DELETE')),
};

const ApiUrlException = (message: string) => ({ message });

const request = async (url: string, options: any, contentType: undefined, customDomain: undefined) => {
  // Get the request method
  let method = 'get';
  if (options.method) {
    method = options.method.toLowerCase();
  }

  let newUrl = url;

  // Get params
  if (options.params) {
    newUrl = urlFormat(url, options.params);
  }
  let body = null;
  if (options.body) {
    body = options.body;
  }

  // Do the request
  try {
    // if (API_URL === '') {
    //   throw new ApiUrlException('Server Error');
    // }

    const response = await API[method](newUrl, body, customDomain);
    const json = await response.text();
    if (!response.ok) {
      // original
      // throw codeMessage[json.error_code];
      // modified
      throw json;
    }

    if (!json) {
      return {};
    }
    return contentType ? json : JSON.parse(json);
  } catch (err) {
    // handle network error here
    if (err instanceof TypeError) {
      const networkError = `${err}`.toLowerCase();
      if (networkError.indexOf('networkerror') !== -1) {
        throw new Error('Check Internet Connectivity');
      }
    }
    throw JSON.parse(err);
  }
};

export default request;
