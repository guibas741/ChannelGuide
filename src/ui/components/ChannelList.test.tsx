import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import getChannelFixture from "../../test/fixtures/channelFixture";

import { ChannelList } from "./ChannelList";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");

  return {
    ...actualNav,

    useNavigation: jest.fn().mockImplementation(() => ({
      navigate: mockNavigate,
      goBack: jest.fn(),
      push: jest.fn()
    }))
  };
});

const channelFixture = getChannelFixture();

const setup = (channelsList = []) =>
  render(
    <NavigationContainer>
      <ChannelList channelsList={channelsList} />
    </NavigationContainer>
  );

describe("ChannelList", () => {
  it("renders channel item", () => {
    const { getByText } = setup([channelFixture] as any);

    fireEvent.press(getByText(/channel 0/i));

    expect(mockNavigate).toHaveBeenCalledWith("Details", {
      channel: {
        category: "Movies",
        id: "123",
        name: "Channel 0",
        summary: "This is a fixture summary",
        thumbnail: "fake-thumbnail"
      }
    });
  });

  it("renders empty state", () => {
    const { getByText } = setup([]);

    getByText(/no channels found/i);
  });
});
