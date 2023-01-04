export const format = (url: any, params: any) => {
    if (Object.keys(params).length === 0) {
      return url;
    }
  
    const parameters = new URLSearchParams();
  
    for (const parameter of Object.keys(params)) {
      if (params[parameter] !== '') parameters.set(parameter, params[parameter]);
    }
    return `${url}?${parameters.toString()}`;
  };
  
  export default format;
  
  export const getDomain = (url: any, subdomain = false) => {
    let newUrl = url.replace(/(https?:\/\/)?(www.)?/i, '');
  
    if (!subdomain) {
      newUrl = newUrl.split('.');
      newUrl = newUrl.slice(newUrl.length - 2).join('.');
    }
  
    if (newUrl.indexOf('/') !== -1) {
      return newUrl.split('/')[0];
    }
  
    return newUrl;
  };
  