import {
  Box,
  Divider,
  Center,
  Show,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import "./rightSocial.css";
import { emailLink } from "../../../constants/links";

export default function RightSocial() {
  return (
    <Show breakpoint="(min-width: 1200px)">
      <Box zIndex={10} className="right-social-container">
        <Center>
          <Link
            href={`mailto:${emailLink}`}
            target="__blank"
            rel="nofollow noopener noreferrer"
            style={{ writingMode: "vertical-rl" }}
            className="right-social-link"
            isExternal
          >
            {emailLink}
          </Link>
        </Center>
        <Center height="40vh">
          <Divider
            orientation="vertical"
            className="right-social-hr"
            borderColor={useColorModeValue("gray.700", "white !important")}
          />
        </Center>
      </Box>
    </Show>
  );
}
