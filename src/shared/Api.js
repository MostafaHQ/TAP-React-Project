import axios from "axios";

const BACKEND_HOST = "https://tap-web-1.herokuapp.com/";

export const loadTopics = (searchBy) => {
  let params = new URLSearchParams();

  if (searchBy) {
    params.set("phrase", searchBy);
  }
  return axios
    .get(`${BACKEND_HOST}topics/list?` + params)
    .then((res) => res.data);
};

export const loadDetails = (topicId) => {
  return axios
    .get(`${BACKEND_HOST}topics/details/${topicId}`)
    .then((res) => res.data);
};
