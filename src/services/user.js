import http from "./http";
import jwtDecode from "jwt-decode";
const [aep, tok] = ["/admin", "token"];

http.setJwt(getJwt());

function getJwt() {
  return localStorage.getItem(tok);
}

const user = {
  getCurrentUser: () => {
    try {
      const jwt = localStorage.getItem(tok);
      const some = jwtDecode(jwt);
      if (some) {
        return some;
      }
    } catch (ex) {
      return null;
    }
  },
  login: async (loginobj) => {
    return await http.post(aep + "/login", loginobj); //
  },
  register: async (regobj) => {
    return await http.post(aep, regobj); //
  },
  getprofile: async (_id) => {
    return await http.get(aep + "/getProfile/id", { params: { _id } }); //
  },
  updpers: async (persobj) => {
    return await http.post(aep + "/updatePersonal", persobj);
  },
  updphys: async (physobj) => {
    return await http.post(aep + "/updatePhysical", physobj);
  },
  updskil: async (skilobj) => {
    return await http.post(aep + "/updateSkill", skilobj);
  },
  updprof: async (profobj) => {
    return await http.post(aep + "/Profile", profobj);
  },
  getactr: async () => {
    return await http.get(aep + "/getActor"); //
  },
  getprodr: async () => {
    return await http.get(aep + "/getProducer"); //
  },
  updpassd: async (passd) => {
    return await http.post(aep + "/updatePassword/id", passd); //
  },
  postim: async (postimd) => {
    return await http.post(aep + "/postImage", { data: postimd }); //
  },
  getims: async (id) => {
    return await http.get(aep + "/getImages", { params: { id } }); //
  },
  sendotp: async (sndotpobj) => {
    return await http.post(aep + "/sendOtp", sndotpobj);
  },
  verotp: async (verotpobj) => {
    return await http.post(aep + "/verifyOtp", verotpobj);
  },
  resenotp: async (resotpobj) => {
    return await http.post(aep + "/resendOtp", resotpobj);
  },
  delims: async (delimobj) => {
    return await http.post(aep + "/deleteImages", delimobj); //
  },
  fillpart: async (fillpaobj) => {
    return await http.post(aep + "/fillPartnerForm", fillpaobj);
  },
  updpart: async (updpaobj) => {
    return await http.post(aep + "/updatePartnerForm", updpaobj);
  },
  getpart: async () => {
    return await http.get(aep + "/getPartnerForm"); //
  },
  cremon: async (cremobj) => {
    return await http.post(aep + "/createMonos", cremobj); //
  },
  getmon: async (userId) => {
    return await http.get(aep + "/getMonos", { params: { userId } }); //
  },
  delmon: async (delmobj) => {
    return await http.post(aep + "/deleteMonos", delmobj); //
  },
  forgot: async (forobj) => {
    return await http.post("/forgetPassword", forobj);
  },
};

export default user;
