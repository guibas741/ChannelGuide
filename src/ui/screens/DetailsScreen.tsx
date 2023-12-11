//import EvilIcons from "@expo/vector-icons/EvilIcons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { RouterStackParams } from "../../Router";
import { colors } from "../../theme";

const Container = styled.View`
  background-color: ${colors.dark};
  align-items: center;
  flex: 1;
`;

const TextContainer = styled.View`
  padding: 16px;
  background-color: ${colors.regular};
  margin: 12px;
  position: absolute;
  bottom: 60px;
  border-radius: 8px;
`;

const BaseText = styled.Text`
  color: ${colors.light};
  font-family: Courier New;
`;

const Name = styled(BaseText)`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 4px;
`;

const Category = styled(BaseText)`
  font-size: 12px;
  margin-bottom: 16px;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 60%;
`;

const CloseButton = styled.TouchableOpacity`
  height: 36px;
  width: 36px;
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

type DetailsScreenProps = {
  route: RouteProp<RouterStackParams, "Details">;
};

export function DetailsScreen({ route }: DetailsScreenProps) {
  const { goBack } = useNavigation();
  const { params } = route;
  const { channel } = params;

  if (!channel) {
    return (
      <Container>
        <BaseText>No channel found</BaseText>
      </Container>
    );
  }

  return (
    <Container>
      <CloseButton onPress={goBack}>
        <BaseText>Close</BaseText>
        {/* <EvilIcons name="close-o" size={36} color={colors.light} /> */}
      </CloseButton>
      <HeaderImage source={{ uri: channel.thumbnail }} resizeMode="cover" />
      <TextContainer>
        <Name>{channel.name}</Name>
        <Category>{channel.category}</Category>
        <BaseText>{channel.summary}</BaseText>
      </TextContainer>
    </Container>
  );
}
