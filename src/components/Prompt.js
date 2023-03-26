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
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import "./Prompt.css";
import creativityKitDE from "./creativityKitDE";
import creativityKitEN from "./creativityKitEN";
import mailKitDE from "./mailKitDE";
import mailKitEN from "./mailKitEN";
import dataKitDE from "./dataKitDE";
import dataKitEN from "./dataKitEN";
import translateKitDE from "./translateKitDE";
import translateKitEN from "./translateKitEN";



function App() {
  const [currentData, setCurrentData] = useState({ buttonData, buttonDataEN });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDataSetChange = (dataSet) => {
    setCurrentData(dataSet);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderMenuItem = (key, icon, text, dataSet) => (
    <Box
      key={key}
      onClick={() => {
        handleDataSetChange(dataSet);
      }}
      className="menu-item"
    >
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
        {renderMenuItem("creativityKit", <CreateIcon className="menu-icon" />, "creativityKit", {
          buttonData: creativityKitDE,
          buttonDataEN: creativityKitEN,
        })}
        {renderMenuItem("mailKit", <MailIcon className="menu-icon" />, "mailKit", {
          buttonData: mailKitDE,
          buttonDataEN: mailKitEN,
        })}
        {renderMenuItem("dataKit", <DataObjectRoundedIcon className="menu-icon" />, "dataKit", {
          buttonData: dataKitDE,
          buttonDataEN: dataKitEN,
        })}
        {renderMenuItem("translateKit", <TranslateRoundedIcon className="menu-icon" />, "translateKit", {
          buttonData: translateKitDE,
          buttonDataEN: translateKitEN,
        })}

      </Box>
      <Box component="main" className="app-container">
        <PromptBuilder
          key={currentData.buttonData}
          buttonData={currentData.buttonData}
          buttonDataEN={currentData.buttonDataEN}
        />

      </Box>

    </Box>
  );
}

export default App;
