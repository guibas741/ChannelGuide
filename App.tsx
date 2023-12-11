import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Router } from "./src/Router";
import { colors } from "./src/theme";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.dark};
`;

export default function App() {
  return (
    <NavigationContainer>
      <Container>
        <StatusBar style="light" />
        <Router />
      </Container>
    </NavigationContainer>
  );
}
