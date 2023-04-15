import Axios from "axios";

export default function createApi({ url, method }) {
  const request = (paths = {}, queries = {}, payload = {}, headers = {}) => {
    const config = {
      url: Object.keys(paths).reduce(
        (prev, curr) => prev.replace(`:${curr}`, paths[curr]),
        url
      ),
      method: method,
      params: queries,
      data: payload,
      headers: headers,
    };

    console.log(config);

    return Axios(config)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  };
  return request;
}