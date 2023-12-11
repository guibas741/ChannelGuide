import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { Channel } from "../../domain/channelDomain";
import getChannelFixture from "../../test/fixtures/channelFixture";

import { DetailsScreen } from "./DetailsScreen";

const channelFixture = getChannelFixture();

const setup = (channel?: Channel) =>
  render(
    <NavigationContainer>
      <DetailsScreen route={{ params: { channel } } as any} />
    </NavigationContainer>
  );

describe("DetailsScreen", () => {
  it("renders empty state", () => {
    const { getByText } = setup(undefined);

    getByText(/no channel found/i);
  });

  it("renders channel details", () => {
    const { getByText } = setup(channelFixture);

    getByText(/channel 0/i);
    getByText(/movies/i);
    getByText(/this is a fixture summary/i);
  });
});
