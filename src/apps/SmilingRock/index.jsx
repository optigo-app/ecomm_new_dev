import React, { useState } from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import { UseBestsellerData } from "../../core/hooks";
import Box from "@mui/material/Box";
import Bestseller from '../../core/components/feature/BestSeller'
import ControlPanel1 from '../../core/components/demo/ControlPannel1';

const SmilingRock = () => {
  const { bestsellers, loading, error } = UseBestsellerData();
  const [config, setConfig] = useState({
    isBestSellerView: 1,
    Cardlayout: 1,
    slidesPerView: 4,
    autoplay: false,
    navigation: false,
    header: {
      title: "Bestseller",
      Align: "center",
      isIcon: true,
    },
  });

  if (loading) return <LoadingBar />;
  if (error) return <p>Error fetching bestsellers: {error.message}</p>;

  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
    {/* Control Panel for Configuration */} 
    <ControlPanel1 config={config} setConfig={setConfig} />

    {/* Pass Configuration as Props to Album */}
    <Bestseller
      isBestSellerView={config.isBestSellerView}
      Cardlayout={config.Cardlayout}
      data={bestsellers}
      slidesPerView={config.slidesPerView}
      autoplay={config.autoplay}
      navigation={config.navigation}
      headerConfig={config.header} // Pass header config as a prop
    />
  </Box>
  )
}

export default SmilingRock;

const LoadingBar = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress color="success" />
    </Box>
  );
};
