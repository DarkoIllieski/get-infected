import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";

const advertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
        <FlexBetween>
      <Typography color={dark} varian="h5" fontWeight="500">
        Sponsored
      </Typography>
      <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img 
      width="100%"
      height="auto"
      alt="advert"
      src="http://localhost:3001/assets/info4.jpeg"
      style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
    </WidgetWrapper>
  );
};
