import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Channel } from "../../domain/channelDomain";
import { formatChannelName } from "../../presenter/channelPresenter";
import { RouterStackParams } from "../../Router";
import { colors } from "../../theme";

const ChannelContainer = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${colors.dark};
  align-items: center;
  justify-content: center;
  padding: 36px;
`;

const BaseText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: Courier New;
  color: ${colors.light};
`;

const EmptyStateContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
`;

const ItemSeparator = styled.View`
  height: 8px;
`;

function EmptyState() {
  return (
    <EmptyStateContainer>
      <BaseText>No channels found</BaseText>
    </EmptyStateContainer>
  );
}

export type ChannelNavigation = NativeStackNavigationProp<RouterStackParams>;

function ChannelItem({ channel }: { channel: Channel }) {
  const { navigate } = useNavigation<ChannelNavigation>();
  return (
    <ChannelContainer onPress={() => navigate("Details", { channel })}>
      <BaseText>{formatChannelName(channel.name)}</BaseText>
    </ChannelContainer>
  );
}

const MemoizedChannelItem = React.memo(ChannelItem);

type ChannelListProps = {
  channelsList: Channel[];
};

export function ChannelList({ channelsList }: ChannelListProps) {
  const renderItem = useCallback(
    ({ item }: { item: Channel }) => <MemoizedChannelItem channel={item} />,
    []
  );

  return (
    <FlatList
      data={channelsList}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <ItemSeparator />}
      style={{ paddingVertical: 8 }}
      ListEmptyComponent={<EmptyState />}
    />
  );
}
