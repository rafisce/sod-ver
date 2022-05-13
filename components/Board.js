import { View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";

import Background from "./Background";

const { width } = Dimensions.get("window");
const Board = ({ grid }) => {
  return (
    <View
      style={{
        width: width,
        height: width,
      }}
    >
      <Background key={grid} grid={grid} />
    </View>
  );
};

export default Board;
