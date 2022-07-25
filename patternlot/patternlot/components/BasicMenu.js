import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontWeight } from "@mui/system";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const button_theme = createTheme({
      typography: {
        button: {
          textTransform: "none",
          fontSize: "16px",
          fontFamily: 'Roboto',
          fontWeight: 700 
        }
      }
    });

  return (
    <div>
      <ThemeProvider theme={button_theme}>
        <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // sx={{ textTransform: "none", fontSize: "15px", 
            //     }}
            style={{ color: "#000000" }} // this line works
        >
            Categories
        </Button>
      </ThemeProvider>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        
      >
        <MenuItem onClick={handleClose}>Trending</MenuItem>
        <MenuItem onClick={handleClose}>Essential</MenuItem>
        <MenuItem onClick={handleClose}>Luxury</MenuItem>
        <MenuItem onClick={handleClose}>Vintage</MenuItem>
        <MenuItem onClick={handleClose}>Cartoon</MenuItem>
      </Menu>
    </div>
  );
}
