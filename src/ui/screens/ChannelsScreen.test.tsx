import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { fetchChannels } from "../../infra/channelRepository";
import { getRawChannelListFixture } from "../../test/fixtures/rawChannelFixture";

import { ChannelsScreen } from "./ChannelsScreen";

jest.mock("../infra/channelRepository");
const fetchChannelsMock = fetchChannels as jest.Mock;

const rawChannelsList = getRawChannelListFixture();

const setup = () =>
  render(
    <NavigationContainer>
      <ChannelsScreen />
    </NavigationContainer>
  );

describe("ChannelsScreen", () => {
  it("renders empty state", async () => {
    fetchChannelsMock.mockResolvedValueOnce({ data: rawChannelsList });
    const { findByText, getByText } = setup();

    await findByText(/channel 0/i);
    getByText(/channel 1/i);
  });
});
