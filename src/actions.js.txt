const FETCH_APIS_SUCCESS = 'FETCH_APIS_SUCCESS';
export const fetchAPIs = () => {
    return async dispatch => {
      try {
        const response = await fetch('/path-to-your-json-file.json');
	if (!response.ok) {
	  throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
	console.log('Fetched data', data);
        dispatch({ type: FETCH_APIS_SUCCESS, payload: data });
      } catch (error) {
        console.error('Error fetching APIs:', error);
      }
    };
};

