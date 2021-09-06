import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
    display: "flex",
  },

  header: {
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#FFF",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  battersection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bateryImg: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  batteryText: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default style;
