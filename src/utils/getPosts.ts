import axios from "axios";

export const getPosts = (setData: any) => {
  axios.get("http://localhost:4444/posts").then(function (response) {
    setData(response.data);
  });
};
