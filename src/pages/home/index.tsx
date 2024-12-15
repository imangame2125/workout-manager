import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/packages");
  }, [navigate]);
  return null;
};

export default Home;
