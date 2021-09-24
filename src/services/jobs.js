import http from "./http";
const [aep, tok] = ["/job", "token"];

http.setJwt(getJwt());

function getJwt() {
  return localStorage.getItem(tok);
}

const job = {
  crejob: async (creobj) => {
    return await http.post(aep + "/createJob", creobj); //
  },
  getaljob: async (userId) => {
    return await http.get(aep + "/getAllJob", { params: { userId } }); //
  },
  serjob: async (serjobj) => {
    return await http.post(aep + "/searchJob", { params: serjobj }); //
  },
  getjob: async (userId) => {
    return await http.get(aep + "/getJob/userId", { params: { userId } }); //
  },
  appljob: async (applobj) => {
    return await http.post(aep + "/applyJob", applobj); //
  },
  getapdjob: async (getapdobj) => {
    return await http.get("/getApplaiedJob/userId", { params: getapdobj }); //
  },
  deljob: async (deljobj) => {
    return await http.post(aep + "/deleteJob", deljobj); //
  },
  getedpro: async (id) => {
    return await http.get(aep + "/getEditProducer", { params: { id } }); //
  },
  updjobid: async (updjobj) => {
    return await http.post(aep + "/updateJob/id", updjobj); //
  },
};

export default job;
