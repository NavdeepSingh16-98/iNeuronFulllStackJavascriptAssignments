import {
  Stack,
  VStack,
  Heading,
  Image,
  Flex,
  Text,
  Link,
  // IconButton,
  Icon,
} from "@chakra-ui/react";

import profilePic from "../../../assets/images/Photograph.JPG";
import ICONS from "../../../constants/icons";
import { tcsLink } from "../../../constants/links";

export default function Introduction() {
  return (
    <Stack
      direction={["column-reverse", "row"]}
      spacing="24px"
      style={{ alignItems: "center" }}
    >
      <VStack align="stretch">
        <Heading
          as="h1"
          size="xl"
          noOfLines={3}
          style={{ alignItems: "center" }}
        >
          Hi, I&apos;m Navdeep Singh.{" "}
          {/* <IconButton
            aria-label="Play pronunciation track"
            variant="link"
            isRound
            icon={<Icon as={FaPlayCircle} boxSize="2rem" color="purple.500" />}
          /> */}
        </Heading>
        <Text fontSize="md">
          I&apos;m full-stack developer(Proficient in Frontend). I
          work at{" "}
          <Link href={tcsLink} isExternal>
            TCS<Icon as={ICONS.EXTERNAL_LINK} mx="2px" />
          </Link>{" "}
          as a System Engineer(TCS Digital).
          <br />
          I am passionate for creating things. I love to build and develop
          software that help society. <br />
          In my pass-time, I socialize with my friends, and go for long walks. I
          meditate and also do public speaking at toastmasters clubs.
        </Text>
      </VStack>
      <Flex>
        <Image
          borderRadius="full"
          src={profilePic}
          boxSize="224px"
          objectFit={"cover"}
          loading="lazy"
          alt="Navdeep Singh"
        />
      </Flex>
    </Stack>
  );
}
