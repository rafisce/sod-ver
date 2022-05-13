import { View, Text } from "react-native";
import React from "react";
import Row from "./Row";

const Background = ({ grid }) => {
  return (
    <View style={{ flex: 1 }}>
      {new Array(9).fill(0).map((_, i) => (
        <Row key={i} row={i} grid={grid} />
      ))}
    </View>
  );
};

export default Background;
