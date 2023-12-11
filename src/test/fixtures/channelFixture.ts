import { Channel } from "../../domain/channelDomain";

export default function getChannelFixture(): Channel {
  return {
    id: "123",
    name: "Channel 0",
    category: "Movies",
    summary: "This is a fixture summary",
    thumbnail: "fake-thumbnail"
  };
}
