import firebase from 'firebase'

const AuthService = {
    methods: {
        Login(email, password) {
            return firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
                return response;
            }, err => {
                throw err;
            })
        }
    }
}

export default AuthService;