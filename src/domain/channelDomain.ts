export type Channel = {
  id: string;
  name: string;
  category: string;
  summary: string;
  thumbnail: string;
};

type RawChannel = {
  _id: string;
  name: string;
  category: string;
  summary: string;
  thumbnail: {
    path: string;
  };
};

export const channelApiMapper = (rawChannel: RawChannel): Channel => ({
  id: rawChannel._id,
  name: rawChannel.name,
  category: rawChannel.category,
  summary: rawChannel.summary,
  thumbnail: rawChannel.thumbnail.path
});
