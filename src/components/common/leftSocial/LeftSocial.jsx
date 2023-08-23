import {
  Box,
  VStack,
  Link,
  Icon,
  Divider,
  Center,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";

import "./leftSocial.css";
import socialLinkData from "../../../constants/socialLinkData";

export default function LeftSocial() {
  return (
    <Show breakpoint="(min-width: 1200px)">
      <Box zIndex={10} className="left-social-container">
        <VStack as={"ul"} className="left-social-stack">
          {socialLinkData?.map((d) => (
            <li key={d.key}>
              <Link className="left-social-link" href={d.link} isExternal>
                <Icon h="25px" w="25px" as={d.icon} />
              </Link>
            </li>
          ))}
          <Center height="30vh">
            <Divider
              orientation="vertical"
              className="left-social-hr"
              borderColor={useColorModeValue("gray.700", "white !important")}
            />
          </Center>
        </VStack>
      </Box>
    </Show>
  );
}
