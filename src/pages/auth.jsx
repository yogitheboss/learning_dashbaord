import { Button } from "@/components/ui/button";
import { BsGoogle } from "react-icons/bs";
import RoadMap from "@/assets/roadmap.jpeg";
import Typewriter from "typewriter-effect";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Auth = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  return (
    <div className="light h-screen w-full lg:flex bg-gradient-to-r from-blue-50 to-sky-100">
      <div className="hidden w-2/3 flex-col justify-between bg-[url('/src/assets/pattern.svg')] bg-cover bg-right-top p-8 lg:flex">
        <h1 className="flex gap-2 text-5xl font-extrabold text-white">
          <img
            src={RoadMap}
            alt="Mind"
            className="grid aspect-square w-10 place-content-center"
          />
          Skill Navigator
        </h1>
        <div className="flex flex-col gap-2 text-4xl font-medium text-gray-900">
          <p>Your path bringer app -</p>
          <span className="flex">
            <Typewriter
              options={{
                strings: ["Grow", "Learn"],
                autoStart: true,
                loop: true,
              }}
            />
            with Friends in Real-Time
          </span>
        </div>
      </div>
      <div className="grid flex-1 place-items-center  p-6">
        <Button
          type="submit"
          size="lg"
          className="flex w-80 gap-2 text-xl"
          onClick={loginWithRedirect}
        >
          <span>
            <BsGoogle />
          </span>
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};
