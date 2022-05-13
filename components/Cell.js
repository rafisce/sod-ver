import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";
const Cell = ({ row, col, grid }) => {
  const textStyle = { fontWeight: "500", color: WHITE };
  const [num, setNum] = useState("");

  const updateGrid = (newText) => {
    grid[row][col] = Number(newText);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BLACK,
        padding: 4,
        justifyContent: "space-between",
        borderColor: "black",
        borderWidth: 1,
        borderTopWidth: row === 0 || row === 3 || row === 6 ? 2 : 0.5,
        borderBottomWidth: row === 8 ? 2.5 : 0.5,
        borderLeftWidth: col === 0 || col === 3 || col === 6 ? 2 : 0.5,
        borderRightWidth: col === 8 ? 2.5 : 0.5,
      }}
    >
      <TextInput
        maxLength={1}
        keyboardType="numeric"
        style={[textStyle, { display: "flex", textAlign: "center" }]}
        onChangeText={(newText) => setNum(newText) + updateGrid(newText)}
      >
        {grid[row][col] === 0 ? "" : grid[row][col]}
      </TextInput>
    </View>
  );
};

export default Cell;
