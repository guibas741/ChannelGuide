export function getRawChannelListFixture() {
  return [
    {
      _id: "123",
      name: "Channel 0",
      category: "Movies",
      summary: "This is a fixture summary",
      thumbnail: {
        path: "fake-thumbnail"
      }
    },
    {
      _id: "321",
      name: "Channel 1",
      category: "TV Shows",
      summary: "This is tv show summary",
      thumbnail: {
        path: "fake-thumbnail-2"
      }
    }
  ];
}
