import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState("");
  const [current, setCurrent] = useState("");

  const handlePress = (buttonValue) => {
    if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "C") {
      setResult("");
      setCurrent("");
    } else {
      setCurrent(current + buttonValue);
    }
  };

  const calculateResult = () => {
    try {
      const evaluated = eval(current);
      setResult(evaluated.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const renderButton = (buttonValue) => (
    <TouchableOpacity onPress={() => handlePress(buttonValue)} style={styles.button}>
      <Text style={styles.buttonText}>{buttonValue}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result || "0"}</Text>
      <Text style={styles.current}>{current}</Text>
      <View style={styles.row}>
        {["1", "2", "3", "+"].map(renderButton)}
      </View>
      <View style={styles.row}>
        {["4", "5", "6", "-"].map(renderButton)}
      </View>
      <View style={styles.row}>
        {["7", "8", "9", "*"].map(renderButton)}
      </View>
      <View style={styles.row}>
        {["C", "0", "=", "/"].map(renderButton)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  result: {
    fontSize: 36,
    padding: 10,
    textAlign: 'right',
    width: '90%',
    marginBottom: 10,
  },
  current: {
    fontSize: 24,
    padding: 10,
    textAlign: 'right',
    width: '90%',
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    width: '20%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
});
