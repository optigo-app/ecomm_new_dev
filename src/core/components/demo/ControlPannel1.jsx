import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Box, Switch, FormControlLabel, Slider, TextField } from "@mui/material";

const ControlPanel1 = ({ config, setConfig }) => {
  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 2, gap: 2 }}>
      {/* Album View Selection */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="view-select-label">Select Bestseller View</InputLabel>
        <Select
          labelId="view-select-label"
          value={config.isBestSellerView}
          onChange={(e) => handleChange("isBestSellerView", Number(e.target.value))}
        >
          <MenuItem value={1}>Grid with banner</MenuItem>
          <MenuItem value={2}>Full Screen Carousel</MenuItem>
          <MenuItem value={3}>Grid view</MenuItem>
        </Select>
      </FormControl>

      {(config.isBestSellerView === 1 || config.isBestSellerView === 3) && (
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="view-select-label">Select Card layout View</InputLabel>
          <Select
            labelId="view-select-label"
            value={config.Cardlayout}
            onChange={(e) => handleChange("Cardlayout", Number(e.target.value))}
          >
            <MenuItem value={1}>Card layout 1</MenuItem>
            <MenuItem value={2}>Card layout 2</MenuItem>
          </Select>
        </FormControl>
      )}

      {/* Slides Per View (Only for Carousel Views) */}
      {config.isBestSellerView > 1 && (
        <Box sx={{ width: 250 }}>
          <InputLabel>Slides Per View</InputLabel>
          <Slider
            value={config.slidesPerView}
            min={1}
            max={5}
            step={1}
            onChange={(e, value) => handleChange("slidesPerView", value)}
            valueLabelDisplay="auto"
          />
        </Box>
      )}

      {/* Autoplay Toggle */}
      {/* {config.isAlbumView > 1 && (
        <FormControlLabel
          control={<Switch checked={config.autoplay} onChange={(e) => handleChange("autoplay", e.target.checked)} />}
          label="Autoplay"
        />
      )} */}

      {/* Navigation Toggle */}
      {/* {config.isAlbumView > 1 && (
        <FormControlLabel
          control={<Switch checked={config.navigation} onChange={(e) => handleChange("navigation", e.target.checked)} />}
          label="Show Navigation"
        />
      )} */}

      {/* HEADER CONFIGURATIONS */}

      {/* Header Title */}
      <TextField
        label="Header Title"
        variant="outlined"
        value={config.header.title}
        onChange={(e) => handleChange("header", { ...config.header, title: e.target.value })}
      />

      {/* Header Alignment */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="header-align-label">Header Alignment</InputLabel>
        <Select
          labelId="header-align-label"
          value={config.header.Align}
          onChange={(e) => handleChange("header", { ...config.header, Align: e.target.value })}
        >
          <MenuItem value="left">Left</MenuItem>
          <MenuItem value="center">Center</MenuItem>
          <MenuItem value="right">Right</MenuItem>
        </Select>
      </FormControl>

      {/* Show/Hide Header Icon */}
      <FormControlLabel
        control={<Switch checked={config.header.isIcon} onChange={(e) => handleChange("header", { ...config.header, isIcon: e.target.checked })} />}
        label="Show Header Icon"
      />
    </Box>
  );
};

export default ControlPanel1;
