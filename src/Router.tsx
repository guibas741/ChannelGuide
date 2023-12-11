import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from "@react-navigation/native-stack";
import React from "react";
import { Channel } from "./domain/channelDomain";
import { colors } from "./theme";
import { ChannelsScreen } from "./ui/screens/ChannelsScreen";
import { DetailsScreen } from "./ui/screens/DetailsScreen";

const SCREEN_OPTIONS = {
  headerStyle: {
    backgroundColor: colors.dark
  },
  headerTintColor: colors.light,
  headerTitleStyle: {
    fontFamily: "Courier New",
    fontWeight: "bold"
  }
} as NativeStackNavigationOptions;

const MODAL_OPTIONS = {
  presentation: "formSheet",
  headerShown: false
} as NativeStackNavigationOptions;

export type RouterStackParams = {
  Home: undefined;
  Details: {
    channel?: Channel;
  };
};

const Stack = createNativeStackNavigator<RouterStackParams>();

export function Router() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name="Home" component={ChannelsScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={MODAL_OPTIONS}
      />
    </Stack.Navigator>
  );
}
