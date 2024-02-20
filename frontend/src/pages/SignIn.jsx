import pic1 from "../assets/1.jpg";

const SignIn = () => {
  return (
    <div className="h-full">
      <div
        style={{ backgroundImage: `url(${pic1})` }}
        className="w-1/2 h-[100vh] bg-no-repeat bg-cover"
      >
        <div className="h-full w-full bg-[#27ae60] bg-opacity-60 flex justify-center items-center">
          {" "}
          <div className="text-white">
            <p className="font-montserrat">Welcome to,</p>
            <h1 className="font-bold font-montserrat text-[60px]">Scion Investment</h1>
          </div>
        </div>
      </div>
      <div className="p-3"></div>
    </div>
  );
};

export default SignIn;
