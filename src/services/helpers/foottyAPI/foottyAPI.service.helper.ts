import axios from 'axios';

const getRequestHandler = (url: string) => {
  return axios
    .get(url)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

const foottyAPIServiceHelper = { getRequestHandler };

export default foottyAPIServiceHelper;
