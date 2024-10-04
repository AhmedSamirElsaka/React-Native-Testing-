import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Welcome = ({ name }: { name: string }) => {
  if (name) {
    return (
      <View>
        <Text>Welcome {name}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
