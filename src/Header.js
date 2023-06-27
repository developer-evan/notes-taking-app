import { View, Text } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Header;
