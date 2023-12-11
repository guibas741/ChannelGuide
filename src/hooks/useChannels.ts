import { useEffect, useState } from "react";
import { Channel, channelApiMapper } from "../domain/channelDomain";
import { fetchChannels } from "../infra/channelRepository";

export function useChannels() {
  const [channelsList, setChannelsList] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getChannels() {
      try {
        setIsLoading(true);
        const { data } = await fetchChannels();
        const mappedData = data.map(channelApiMapper) as Channel[];
        setChannelsList(mappedData);
      } catch (error) {
        console.log("Display this error");
        setChannelsList([]);
      } finally {
        setIsLoading(false);
      }
    }

    getChannels();
  }, []);

  return {
    channelsList,
    isLoading
  };
}
