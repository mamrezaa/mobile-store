//   import axios from "axios";
import instance from "../../plugin/axios";
//   import instance from "../../plugin/axios";

import { setToken, getToken} from "../../Services/services.js";

const state = {
  users: [],
};

const getters = {
  users: (state) => state.users,
};

const actions = {
  fetchUsers({ commit }, form) {
    //const response = instance.post("api/authentication/v3/login")
    instance
      .post("api/authentication/v3/login", form)

      // console.log(response)

      .then((response) => {
        commit("SET_USERS", response.data);
        console.log(response.data)

        //  localStorage.setItem('token', JSON.stringify(response.data.token))
        setToken(response.data);
        console.log( 'services',getToken());

        

        // console.log('test local : ',localStorage.getItem('token'))
        //  localStorage.clear()
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });

    // const headers = {
    //     "e-access-key" : "bb08ce808b5d46e48816cd1f3ce88e88"
    // }

    // try {
    //   const data = await axios.post(
    //     "http://192.168.10.166:5002/api/authentication/v3/login",
    //     form,

    //     {headers}
    //   );
    //   commit("SET_USERS", data.data);

    //   console.log(data.data);
    //   console.log(data.data.token)

    //   // if (state.userName === data.data.userName && state.password === data.data.password){

    //   // }
    // } catch (error) {
    //   alert(error);
    //   console.log(error);
    // }
  },
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;

    // JSON.parse(localStorage.getItem('token'))
    // localStorage.getItem('token')

    // localStorage.setItem('token', JSON.stringify(state.users.token))

    //console.log(state.userName);
    //console.log(state.password);
    console.log(state.users);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
