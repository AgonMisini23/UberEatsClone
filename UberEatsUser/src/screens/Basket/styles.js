import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30, // temp fix
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default styles;
