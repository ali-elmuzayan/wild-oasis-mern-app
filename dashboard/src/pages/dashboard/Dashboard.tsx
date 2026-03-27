import { useEffect } from "react";
import getCabins from "../../services/api/getCabins";

const Dashboard = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return <div>just to test</div>;
};

export default Dashboard;
