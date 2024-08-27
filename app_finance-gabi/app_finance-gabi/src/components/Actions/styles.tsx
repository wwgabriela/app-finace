import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingStart: 14,
    paddingEnd: 14,
  },

  actionButton: {
    alignItems: "center",
    marginRight: 28,
  },

  areaButton: {
    backgroundColor: colors.opacity_black,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
  },

  iconStyle: {
    color: colors.blue,
  },

  labelButton: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
});
