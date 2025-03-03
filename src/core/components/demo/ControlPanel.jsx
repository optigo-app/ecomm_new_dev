import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Box, Switch, FormControlLabel, Slider, TextField } from "@mui/material";

const ControlPanel = ({ config, setConfig }) => {
  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 2, gap: 2 }}>
      {/* Album View Selection */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="view-select-label">Select Album View</InputLabel>
        <Select
          labelId="view-select-label"
          value={config.isAlbumView}
          onChange={(e) => handleChange("isAlbumView", Number(e.target.value))}
        >
          <MenuItem value={1}>Grid View</MenuItem>
          <MenuItem value={2}>Swiper View</MenuItem>
          <MenuItem value={3}>Full-Screen Carousel</MenuItem>
        </Select>
      </FormControl>

      {/* Slides Per View (Only for Carousel Views) */}
      {config.isAlbumView > 1 && (
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
      {config.isAlbumView > 1 && (
        <FormControlLabel
          control={<Switch checked={config.autoplay} onChange={(e) => handleChange("autoplay", e.target.checked)} />}
          label="Autoplay"
        />
      )}

      {/* Navigation Toggle */}
      {config.isAlbumView > 1 && (
        <FormControlLabel
          control={<Switch checked={config.navigation} onChange={(e) => handleChange("navigation", e.target.checked)} />}
          label="Show Navigation"
        />
      )}

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

export default ControlPanel;
