import ICONS from "./icons";
import {
  codingChannelYTLink,
  kirtanChannelYTLink,
  mainChannelYTLink,
} from "./links";

const youtubeLinkData = [
  {
    title: "Main Channel",
    key: "main-channel",
    icon: ICONS.YOUTUBE,
    link: mainChannelYTLink,
  },
  {
    title: "Kirtan Channel",
    key: "kirtan-channel",
    icon: ICONS.YOUTUBE,
    link: kirtanChannelYTLink,
  },
  {
    title: "Coding Channel",
    key: "coding-channel",
    icon: ICONS.YOUTUBE,
    link: codingChannelYTLink,
  },
];

export default youtubeLinkData;
