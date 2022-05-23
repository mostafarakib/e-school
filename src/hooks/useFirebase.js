import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const registrationHandler = (event) => {
    event.preventDefault();

    if (UserPassword.length < 6) {
      setError("Password must be atleast 6 characters!");
      return;
    }

    createUserWithEmailAndPassword(auth, UserEmail, UserPassword)
      .then((result) => {
        // console.log(result.user);
        setError("");
        updateUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserName = () => {
    updateProfile(auth.currentUser, { displayName: userName })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingEmailAndPassword = (event) => {
    event.preventDefault();

    if (UserPassword.length < 6) {
      setError("Password must be atleast 6 characters!");
      return;
    }

    signInWithEmailAndPassword(auth, UserEmail, UserPassword)
      .then((result) => {
        // console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error);
      });
  };

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const passwordResetHandler = () => {
    sendPasswordResetEmail(auth, UserEmail)
      .then(() => {
        alert("A password reset email sent to your email");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    signInUsingFacebook,
    registrationHandler,
    emailChangeHandler,
    passwordChangeHandler,
    nameChangeHandler,
    signInUsingEmailAndPassword,
    error,
    passwordResetHandler,
  };
};

export default useFirebase;
