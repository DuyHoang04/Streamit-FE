import Axios from "axios";

export default function createApi({ url, method }) {
  const request = ({
    payload = {},
    paths = {},
    queries = {},
    headers = {},
    withCredentials = false,
  }) => {
    console.log(withCredentials);
    const config = {
      url: Object.keys(paths).reduce(
        (prev, curr) => prev.replace(`:${curr}`, paths[curr]),
        url
      ),
      method: method,
      params: queries,
      data: payload,
      headers: headers,
      withCredentials: withCredentials,
    };

    return Axios(config)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  };

  return request;
}
