import React from "react";
import { useEffect } from "react";
import { View, Animated } from "react-native";

const Skeleton = () => {
  const AnimatedValue = new Animated.Value(0);

  useEffect(() => {
    animated();

    return () => {
      animated();
    };
  }, []);

  const animated = () => {
    AnimatedValue.setValue(0);
    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 550,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        animated();
      }, 500);
    });
  };

  const translate_Animation = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 450],
  });

  return (
    <View
      style={{ flex: 1, justifyContent: "space-evenly", overflow: "hidden" }}
    >
      <View
        style={{
          backgroundColor: "#ECEFF1",
          height: 26,
          width: "90%",
          borderRadius: 5,
        }}
      >
        <Animated.View
          style={{
            width: "40%",
            height: "100%",
            opacity: 0.5,
            backgroundColor: "#FFF",
            transform: [{ translateX: translate_Animation }],
          }}
        ></Animated.View>
      </View>
    </View>
  );
};

export default Skeleton;
