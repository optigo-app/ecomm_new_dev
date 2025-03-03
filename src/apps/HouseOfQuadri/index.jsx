import React, { useState } from "react";
import Album from "../../core/components/feature/Album";
import { useAlbumData } from "../../core/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ControlPanel from "../../core/components/demo/ControlPanel";

const HouseOfQuadri = () => {
  const { albums, loading, error } = useAlbumData();

  // Centralized album & header configuration state
  const [config, setConfig] = useState({
    isAlbumView: 1,
    slidesPerView: 3,
    autoplay: false,
    navigation: false,
    header: {
      title: "Album",
      Align: "center",
      isIcon: true,
    },
  });

  if (loading) return <LoadingBar />;
  if (error) return <p>Error fetching albums: {error.message}</p>;

  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      {/* Control Panel for Configuration */}
      <ControlPanel config={config} setConfig={setConfig} />

      {/* Pass Configuration as Props to Album */}
      <Album
        isAlbumView={config.isAlbumView}
        data={albums}
        slidesPerView={config.slidesPerView}
        autoplay={config.autoplay}
        navigation={config.navigation}
        headerConfig={config.header} // Pass header config as a prop
      />
    </Box>
  );
};

export default HouseOfQuadri;

const LoadingBar = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress color="success" />
    </Box>
  );
};
