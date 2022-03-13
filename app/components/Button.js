import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ children, style, ...rest }) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <View style={styles.view}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
