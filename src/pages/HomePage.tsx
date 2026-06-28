import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const clickOnLogin = () => {
    navigate("/login");
  };

  const clickOnRegister = () => {
    navigate("/register");
  };
  
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#242424]">
      <h1 className="text-5xl text-taupe-200">Welcome Coder</h1>
      <div className="gap-4 flex">
        <Button
          variant="outline"
          size="lg"
          className="mt-4 text-white"
          onClick={clickOnLogin}
        >
          Login
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="mt-4 text-white"
          onClick={clickOnRegister}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
