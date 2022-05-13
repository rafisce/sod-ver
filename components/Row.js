import { View, Text } from "react-native";
import React from "react";
import Cell from "./Cell";

const Row = ({ row, grid }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {new Array(9).fill(0).map((_, i) => (
        <Cell row={row} col={i} key={i} grid={grid} />
      ))}
    </View>
  );
};

export default Row;
