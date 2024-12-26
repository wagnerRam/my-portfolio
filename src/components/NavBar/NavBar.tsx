import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

export const NavBar = () => {
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>About</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};
