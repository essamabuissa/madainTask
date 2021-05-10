import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [myWins, setMywins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [selectedMove, setSelectedMove] = useState("");
  const [computerMove, setComputerMove] = useState({});

  var moves = [
    { name: "Rock", image: require("./assets/rock.png") },
    { name: "Paper", image: require("./assets/paper.png") },
    { name: "Scissors", image: require("./assets/scissors.png") },
  ];
  const randomImage = require("./assets/question.png");

  const getComputerRandomMove = (arr) => {
    setComputerMove(arr[Math.floor(Math.random() * arr.length)]);
    handleResult();
  };
  const handleResult = () => {
    if (selectedMove === computerMove.name) {
      alert("Draw");
    } else {
      switch (selectedMove) {
        case "Rock":
          if (computerMove.name === "Paper") {
            setComputerWins(computerWins + 1);
          } else if (computerMove.name === "Scissors") {
            setMywins(myWins + 1);
          }
        case "Paper":
          if (computerMove.name === "Rock") {
            setMywins(myWins + 1);
          } else if (computerMove.name === "Scissors") {
            setComputerWins(computerWins + 1);
          }
        case "Scissors":
          if (computerMove.name === "Paper") {
            setMywins(myWins + 1);
          } else if (computerMove["name"] === "Rock") {
            setComputerWins(computerWins + 1);
          }
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: selectedMove === "Rock" ? "green" : "transparent",
            }}
            onPress={() => setSelectedMove("Rock")}
          >
            <Image
              style={{ width: 50, height: 50, marginTop: 10 }}
              source={moves[0].image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: selectedMove === "Paper" ? "green" : "transparent",
            }}
            onPress={() => setSelectedMove("Paper")}
          >
            <Image
              style={{ width: 50, height: 50, marginTop: 10 }}
              source={moves[1].image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor:
                selectedMove === "Scissors" ? "green" : "transparent",
            }}
            onPress={() => setSelectedMove("Scissors")}
          >
            <Image
              style={{ width: 50, height: 50, marginTop: 10 }}
              source={moves[2].image}
            />
          </TouchableOpacity>
        </View>

        <Text>{myWins}</Text>
        <Text>{computerWins}</Text>
        <View>
          <TouchableOpacity>
            <Image
              style={{ width: 50, height: 50 }}
              source={computerMove === {} ? randomImage : computerMove.image}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onPress={() => getComputerRandomMove(moves)}
        color="red"
        title="Play"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
