import { useState, memo, useEffect } from "react";
import pic1 from "../assets/1.jpg";
import logo from "../../public/icon.png";
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
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    toast("Logging in....");
    if (email === "" || password === "") {
      toast.error("Please fill in all fields");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const idToken = await user.getIdToken(true);
          const expires = new Date();
          expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
          const cookie = `firebaseAuthToken=${idToken};expires=${expires.toUTCString()};path=/;secure;SameSite=None`;
          document.cookie = cookie;
          setLoading(false);
          toast.success("Successfully logged in");
          setTimeout(() => {
            window.location.href = "http://localhost:5173/dashboard";
          }, 1000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          toast.error("An error occured");
          toast.error(errorMessage);
          setLoading(false);
        });
    }
  };

  const register = () => {
    setLoading(true);
    if (email === "" || password === "" || username === "") {
      toast.error("Please fill in all fields");
      setLoading(false);
    } else if (username.indexOf(" ") !== -1) {
      toast.error("Username cannot contain spaces");
      setLoading(false);
    } else {
      toast("Registering...");
      if (password === confirmPassword) {
        if (username != null) {
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
              try {
                const user = userCredential.user;
                const idToken = await user.getIdToken();
                const expires = new Date();
                expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
                document.cookie = `firebaseAuthToken=${idToken};expires=${expires.toUTCString()};path=/;secure;SameSite=None`;
                const userDoc = await setDoc(doc(db, "users", user.uid), {
                  id: user.uid,
                  username: username.trim(),
                  email: user.email,
                  profileComplete: false,
                  kycComplete: false,
                });
                toast.success("Account created successfully");
                setLoading(false);
                setTimeout(() => {
                  window.location.href =
                    "https://proj-dash.vercel.app/dashboard";
                }, 1000);
              } catch (error) {
                toast.error(error.message);
                console.error(error);
                setLoading(false);
              }
              // ...
            })
            .catch((error) => {
              const errorMessage = error.message;
              toast.error(errorMessage);
              console.log(errorMessage);
              setLoading(false);
            });
        } else {
          console.log("No display name provided");
          toast.error("Provide a display name");
          setLoading(false);
        }
      } else {
        toast.error("Passwords do not match");
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-h-[100vh] absolute w-full h-[100vh]  flex overflow-y-hidden">
      <Toaster richColors position="top-right" />
      <div className="w-full md:w-1/2 h-[100vh]  bg-no-repeat bg-center bg-cover">
        <div className="h-full w-full bg-[#33337c] bg-opacity-90 flex md:flex-row flex-col justify-center items-center md:gap-0 gap-3">
          {" "}
          <div className="text-white flex items-center flex-col gap-3">
            <img src={logo} alt="logo" className="w-32 md:w-[200px] aspect-auto mx-auto" />
            <h1 className="font-montserrat text-2xl mb-5 md:text-5xl font-bold text-center">Trade Stack Network</h1>
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
                          placeholder="Enter your password..."
                        />
                      </div>
                      <div className="mt-5 flex justify-center">
                        <button
                          onClick={(e) => login(e)}
                          className="p-3 px-5 flex gap-2 hover:scale-105 bg-[#154350] text-white rounded-lg"
                        >
                          Log in{" "}
                          {loading ? <div className="loader"></div> : null}
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
                          className="p-3 px-5 flex gap-2 items-center hover:scale-105  rounded-lg bg-[#154350] text-white"
                        >
                          Sign Up{" "}
                          {loading ? <div className="loader"></div> : null}
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
                        placeholder="Enter your password..."
                      />
                    </div>
                    <div className="mt-5 flex justify-center">
                      <button
                        onClick={(e) => login(e)}
                        className="p-3 px-5 flex gap-2 hover:scale-105 bg-[#154350] text-white rounded-lg"
                      >
                        Log in {loading ? <div className="loader"></div> : null}
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
                        className="p-3 px-5 flex gap-2 items-center hover:scale-105  rounded-lg bg-[#154350] text-white"
                      >
                        Register{" "}
                        {loading ? <div className="loader"></div> : null}
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
