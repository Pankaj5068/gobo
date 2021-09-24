import http from "./http";
const tok = "token";

http.setJwt(getJwt());

function getJwt() {
  return localStorage.getItem(tok);
}

const auth = {};

export default auth;
