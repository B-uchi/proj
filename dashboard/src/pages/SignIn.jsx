import { useState, memo, useEffect } from "react";
import pic1 from "../assets/1.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase/firebaseUtil";
import { toast, Toaster } from "sonner";
import { db } from "../firebase/firebaseUtil";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [page, setPage] = useState("Log in");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const cookie = document.cookie;
    const navigate = useNavigate()

  const login = () => {
    toast("Logging in....");
    if (email === "" || password === "") {
      toast.error("Please fill in all fields");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const idToken = await user.getIdToken(true);
          const expires = new Date();
          expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
          const cookie = `firebaseAuthToken=${idToken};expires=${expires.toUTCString()};domain=localhost;path=/;secure;SameSite=None`;
          document.cookie = cookie;
          toast.success("Successfully logged in");
          setTimeout(() => {
            window.location.href = "/dashboard";
            navigate("/dashboard")
          }, 1000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          toast.error("An error occured");
          toast.error(errorMessage);
        });
    }
  };

  const register = () => {
    if (email === "" || password === "" || username === "") {
      toast.error("Please fill in all fields");
    } else if (username.indexOf(" ") !== -1) {
      toast.error("Username cannot contain spaces");
    } else {
      toast("Registering...");
      if (password === confirmPassword) {
        if (username != null) {
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
              try {
                const user = userCredential.user;
                const idToken = await user.getIdToken();
                document.cookie = `firebase_id_token=${idToken}; SameSite=Strict; Secure; HttpOnly; Path=/`;
                const userDoc = await setDoc(doc(db, "users", user.uid), {
                  id: user.uid,
                  username: username.trim(),
                  email: user.email,
                  profileComplete: false,
                  kycComplete: false,
                });
                toast.success("Account created successfully");
                setTimeout(() => {
                  window.location.href =
                    "https://proj-dash.vercel.app/dashboard";
                }, 1000);
              } catch (error) {
                toast.error(error.message);
              }
              // ...
            })
            .catch((error) => {
              const errorMessage = error.message;
              toast.error(errorMessage);
              console.log(errorMessage);
            });
        } else {
          console.log("No display name provided");
          toast.error("Provide a display name");
        }
      } else {
        toast.error("Passwords do not match");
      }
    }
  };

  return (
    <div className="max-h-[100vh] absolute w-full h-[100vh]  flex overflow-y-hidden">
      <Toaster richColors position="top-right" />
      <div
        style={{ backgroundImage: `url(${pic1})` }}
        className="w-full md:w-1/2 h-[100vh]  bg-no-repeat bg-center bg-cover"
      >
        <div className="h-full w-full bg-[#0d331d] bg-opacity-80 flex md:flex-row flex-col justify-center items-center md:gap-0 gap-3">
          {" "}
          <div className="text-white">
            <p className="font-montserrat text-lg mb-2">Welcome to</p>
            <h1 className="font-bold font-montserrat text-xl md:text-[60px]">
              Trade Stack Network
            </h1>
          </div>
          <div className="p-2 w-[90%] md:hidden md:w-[500px] bg-white rounded-lg">
            <h1 className="font-bold text-center text-xl md:text-3xl text-[#091e42]">
              {page}
            </h1>
            <AnimatePresence>
              {page === "Log in" ? (
                <motion.div
                  className="mt-9 bg-white"
                  initial={{ translateX: -100, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  exit={{ display: "none", opacity: 0 }}
                  key={"login"}
                >
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
                          className="p-3 px-5 hover:scale-105 bg-[#196137] text-white rounded-lg"
                        >
                          Log in{" "}
                          <div id="login" className="traffic-loader"></div>
                        </button>
                      </div>
                      <div className="flex justify-center mt-3">
                        <small
                          onClick={() => setPage("Sign up")}
                          className="mx-auto underline mb-5 cursor-pointer"
                        >
                          Don't have an account? Create one
                        </small>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="mt-9 mb-4 bg-white"
                  initial={{ translateX: 200, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  exit={{ display: "none", opacity: 0 }}
                >
                  <div className="mt-5">
                    <div>
                      <div className="mt-3">
                        <p className="">Username:</p>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full input "
                          placeholder="Enter a username..."
                        />
                      </div>
                      <div className="mt-3">
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full input "
                          placeholder="Something secure...."
                        />
                      </div>
                      <div className="mt-3">
                        <p className="">Confirm Password:</p>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full input "
                          placeholder="Something secure...."
                        />
                      </div>
                      <div className="mt-5 flex justify-center">
                        <button
                          onClick={(e) => register(e)}
                          className="p-3 px-5 flex gap-3 items-center hover:scale-105  rounded-lg bg-[#196137] text-white"
                        >
                          Sign Up{" "}
                        </button>
                      </div>
                      <div className="flex justify-center mt-3">
                        <small
                          onClick={() => setPage("Log in")}
                          className="mx-auto underline mb-2 cursor-pointer"
                        >
                          Already have an account? Log In
                        </small>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="p-3 hidden md:w-1/2 md:flex items-center justify-center bg-white">
        <div className="p-2 md:w-[500px]">
          <h1 className="font-bold text-center text-xl md:text-3xl text-[#091e42]">
            {page}
          </h1>
          <AnimatePresence>
            {page === "Log in" ? (
              <motion.div
                className="mt-9"
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ display: "none", opacity: 0 }}
                key={"login"}
              >
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
                        className="p-3 px-5 hover:scale-105 bg-[#196137] text-white rounded-lg"
                      >
                        Log in <div id="login" className="traffic-loader"></div>
                      </button>
                    </div>
                    <div className="flex justify-center mt-3">
                      <small
                        onClick={() => setPage("Sign Up")}
                        className="mx-auto underline mb-5 cursor-pointer"
                      >
                        Don't have an account? Create one
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="mt-9 mb-4"
                initial={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ display: "none", opacity: 0 }}
              >
                <div className="mt-5">
                  <div>
                    <div className="mt-3">
                      <p className="">Username:</p>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full input "
                        placeholder="Enter a username..."
                      />
                    </div>
                    <div className="mt-3">
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full input "
                        placeholder="Something secure...."
                      />
                    </div>
                    <div className="mt-3">
                      <p className="">Confirm Password:</p>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full input "
                        placeholder="Something secure...."
                      />
                    </div>
                    <div className="mt-5 flex justify-center">
                      <button
                        onClick={(e) => register(e)}
                        className="p-3 px-5 flex gap-3 items-center hover:scale-105  rounded-lg bg-[#196137] text-white"
                      >
                        Register{" "}
                      </button>
                    </div>
                    <div className="flex justify-center mt-3">
                      <small
                        onClick={() => setPage("Log in")}
                        className="mx-auto underline mb-2 cursor-pointer"
                      >
                        Already have an account? Log In
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default memo(SignIn);
