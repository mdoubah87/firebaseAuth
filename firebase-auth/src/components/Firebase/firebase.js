import app from 'firebase/app'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCATf_henoijhOrf2Cyt6s6AeAaPjAUmGM",
    authDomain: "fir-auth-a8e7e.firebaseapp.com",
    databaseURL: "https://fir-auth-a8e7e.firebaseio.com",
    projectId: "fir-auth-a8e7e",
    storageBucket: "fir-auth-a8e7e.appspot.com",
    messagingSenderId: "706186995144"
  };

  class Firebase {
      constructor(props) {
          super(props)
          app.initializeApp(config)

          this.auth = app.auth
      }

      //** API configuration */

      doCreateWithEmailAndPassword = (email, password) => 
        this.auth.doCreateWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
  }
  
  export default Firebase