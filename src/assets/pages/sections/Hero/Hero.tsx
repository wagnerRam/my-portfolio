import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

export const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "110vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "10px",
    },
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position={"relative"}>
                <Box position={"absolute"} width={"150%"} top={-160} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={"relative"} textAlign={"center"} top={-40}>
                  <StyledImage src={Avatar} />
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign={"center"}
              >
                Wagner Ramos
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign={"center"}
              >
                I'm a Software Developer
              </Typography>

              <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                spacing={3}
                pt={3}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};
