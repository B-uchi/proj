import { useState } from "react";
import pic1 from "../assets/1.jpg";
import { motion, AnimatePresence } from "framer-motion";

const SignIn = () => {
  const [page, setPage] = useState("Sign in");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="max-h-[100vh] h-[100vh] flex overflow-y-auto">
      <div
        style={{ backgroundImage: `url(${pic1})` }}
        className="w-1/2 h-[91vh] bg-no-repeat bg-center bg-cover"
      >
        <div className="h-full w-full bg-[#0d331d] bg-opacity-80 flex justify-center items-center">
          {" "}
          <div className="text-white">
            <p className="font-montserrat text-lg">Welcome to</p>
            <h1 className="font-bold font-montserrat text-[60px]">
              Scion Investment
            </h1>
          </div>
        </div>
      </div>
      <div className="p-3 w-1/2 flex items-center justify-center">
        <div className="p-2 md:w-[500px]">
          <h1 className="font-bold text-center text-xl md:text-3xl text-[#091e42]">
            {page}
          </h1>
          <AnimatePresence>
            {page === "Sign in" ? (
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
                        Sign In{" "}
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
                className="mt-9 mb-4"
                key={"register"}
                initial={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ display: "none", opacity: 0 }}
              >
                <div className="mt-5">
                  <div>
                    <div className="">
                      <p className="">Full Name:</p>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full input "
                        placeholder="Enter your full name...."
                      />
                    </div>
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
                        onClick={() => setPage("Sign in")}
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

export default SignIn;
