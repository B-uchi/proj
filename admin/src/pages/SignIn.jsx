import { auth, db } from "../firebase/firebaseUtil";
import { doc, getDoc } from "firebase/firestore";
import { connect } from "react-redux";
import { useState } from "react";
import { setCurrentUser } from "../redux/user/user.actions";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = ({ currentUser, setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    toast("Logging in....");
    if (email === "" || password === "") {
      toast.error("Please fill in all fields");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const userId = userCredential.user.uid;
          const idToken = await userCredential.user.getIdToken();

          const userDoc = getDoc(doc(db, "users", userId)).then(
            async (snapshot) => {
              if (snapshot.exists) {
                if (snapshot.data().isAdmin === false) {
                  toast.error("User is not an admin");
                  return;
                }
                sessionStorage.setItem('token', idToken)
                setCurrentUser({ ...snapshot.data() });
                toast.success("Logged in successfully");
                setTimeout(() => {
                  window.location.href = "http://localhost:5174/"
                }, 2000);
              } else {
                toast.error("User does not exist");
              }
            }
          );
        })
        .catch((error) => {
          toast.error("An error occurred");
          console.log("e, ", error);
        });
    }
  };

  return (
    <div className="w-full h-[100vh] justify-center items-center flex">
      <Toaster richColors position="top-right" />
      <div className="mt-9 bg-white md:w-[50%] mx-auto p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          Log in to Admin Dashboard
        </h1>
        <div className="mt-5">
          <div>
            <div className="">
              <p className="">Email:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full input "
                placeholder="user@domain.com"
              />
            </div>
            <div className="mt-3">
              <p className="">Password:</p>
              <input
                type="password"
                className="w-full input "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Something secure...."
              />
            </div>
            <div className="mt-5 flex justify-center">
              <button
                onClick={(e) => login(e)}
                className="p-3 px-5 hover:scale-105 bg-[#191d2b] text-white rounded-lg"
              >
                Log in <div id="login" className="traffic-loader"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
