const PLUTO_TV_PREFIX = "Pluto TV";

export function formatChannelName(name: string) {
  return name.replace(PLUTO_TV_PREFIX, "");
}
