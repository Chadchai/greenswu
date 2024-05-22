import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="การเผาไหม้และเคมีแยกตามประเภท" subtitle="การเผาไหม้และเคมีแยกตามประเภท" />
      <Box height="100vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
