import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useChannels } from "../../hooks/useChannels";
import { colors } from "../../theme";
import { ChannelList } from "../components/ChannelList";

const Content = styled.View`
  padding: 0px 12px 0 12px;
  background-color: ${colors.regular};
`;

export function ChannelsScreen() {
  const { channelsList, isLoading } = useChannels();

  return (
    <Content>
      {isLoading ? (
        <ActivityIndicator
          size={28}
          accessibilityHint="loading channels indicator"
        />
      ) : (
        <ChannelList channelsList={channelsList} />
      )}
    </Content>
  );
}
