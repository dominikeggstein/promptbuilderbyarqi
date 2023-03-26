import React, { useState } from "react";
import PromptBuilder from "./PromptBuilder";
import buttonData from "./buttonData";
import buttonDataEN from "./buttonDataEN";
import buttonDataDummy1 from "./buttonDataDummy1";
import buttonDataDummy2 from "./buttonDataDummy2";
import { Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CreateIcon from '@mui/icons-material/EditOutlined';
import MailIcon from '@mui/icons-material/MailOutlineRounded';
import CalenderIcon from '@mui/icons-material/PermContactCalendarOutlined';
import "./Prompt.css";

function App() {
  const [currentData, setCurrentData] = useState({ buttonData, buttonDataEN });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDataSetChange = (dataSet) => {
    setCurrentData(dataSet);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderMenuItem = (icon, text, dataSet) => (
    <Box onClick={() => handleDataSetChange(dataSet)} className="menu-item">
      <Box className="menu-item-icon">{icon}</Box>
      {drawerOpen && <Typography>{text}</Typography>}
    </Box>
  );

  return (
    <Box className="app">
      <Box className={`sidebar ${drawerOpen ? "open" : ""}`}>
        <Box className="menu-item">
          <IconButton
            className="menu-button"
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {renderMenuItem(<CreateIcon />, "Original Data Set", {
          buttonData,
          buttonDataEN,
        })}
        {renderMenuItem(<MailIcon />, "Dummy Data Set 1", {
          buttonData: buttonDataDummy1,
          buttonDataEN: buttonDataDummy1,
        })}
        {renderMenuItem(<CalenderIcon />, "Dummy Data Set 2", {
          buttonData: buttonDataDummy2,
          buttonDataEN: buttonDataDummy2,
        })}
      </Box>
      <Box component="main" className="app-container">
  <PromptBuilder buttonData={currentData.buttonData} buttonDataEN={currentData.buttonDataEN} />
</Box>

    </Box>
  );
}

export default App;
