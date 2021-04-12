import firebase from 'firebase'

const actions = {
    signInAction({ commit }, payload) {
        return firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then(response => {
            commit("setUser", response.user);
          })
          .catch(error => {
            commit("setError", error.message);
          });
      }
};

export default actions;