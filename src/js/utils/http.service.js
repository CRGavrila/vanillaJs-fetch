const makeFetch = async (url = '', method, data = null, options = {}) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    ...options,
    ...(data ? {body: JSON.stringify(data)}: {})
    
  });

  return response.json();
}

export default makeFetch;
