import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    color: '#FDFCFE'
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
    textAlign: 'center'
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23E44',
    justifyContent: 'center',
  }
})