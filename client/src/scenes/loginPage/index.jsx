import { Box, typography, useTheme, useMediaQuery } from "@mui/system";
import { Form } from "./Form";
function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          .getInfected
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" varian="h5" sx={{ mb: "1.5rem" }}>
          We are .getInfected please wellcome on the board!
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
