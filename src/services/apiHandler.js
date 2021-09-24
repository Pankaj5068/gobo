import all from "../services/all";

const apis = async (main, sub, dataobj, notif) => {
  try {
    const { data } = await all[main][sub](dataobj);
    if (data.success) {
      if (notif) {
        all.toast.success(data.message || data.body);
      }
      return data;
    } else {
      all.toast.error(data.message || data.body);
      return data;
    }
  } catch (err) {
    if (
      (err.response && err.response.status === 400) ||
      (err.response && err.response.status === 401)
    ) {
      all.toast.error(
        err.response.data.message ||
          err.response.data.body ||
          err.response.data.error ||
          err.response.data
      );
      return err.response.data;
    }
  }
};

export default apis;
