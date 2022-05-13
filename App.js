import { useEffect, useState } from "react";
import { Button, StyleSheet, TouchableHighlight, View } from "react-native";
import Board from "./components/Board";
import { grid, resetGrid, solve } from "./solver";

export default function App() {
  const [change, setChange] = useState(false);
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Board key={change} grid={grid} />
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight
          style={{
            padding: 10,
            paddingTop: 50,
            flex: 1,
          }}
        >
          <Button
            onPress={() =>
              solve(grid) !== 0 ? setChange(!change) : console.log("not")
            }
            title="solve"
            accessibilityLabel="Learn more about this button"
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            padding: 10,
            paddingTop: 50,
            flex: 1,
          }}
        >
          <Button
            onPress={() => resetGrid() + setChange(!change)}
            title="reset"
            accessibilityLabel="Learn more about this button"
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

function reset() {
  grid.forEach((row) => {
    row.forEach((col) => {
      col = 0;
    });
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
