import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
    
      <View style={styles.triangle} />

      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>Hiswan Halim</Text>
      </View>


      <View style={styles.capsule}>
        <Text style={styles.capsuleText}>105841112722</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 250,
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue",
  },

  rectangle: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  rectangleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  capsule: {
    backgroundColor: "black",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 150,
  },

  capsuleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
