import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
 
  //useColorMode,
} from "@chakra-ui/react";
import { Link as RLink} from "react-router-dom";

import socialLinkData from "../../../constants/socialLinkData";
import pagesData from "../../../constants/pagesData";
import RoundSocialButton from "../button/RoundSocialButton";
//import logoWt from "../../../assets/images/logo-wt.webp";
//import logoDk from "../../../assets/images/logo-dk.webp";

export default function Footer() {
  //const { colorMode } = useColorMode();
  //const logo = colorMode === "light" ? logoWt : logoDk;

  return (
    <Box
      bg={useColorModeValue("white", "#1A202C")}
      color={useColorModeValue("black", "white")}
      mt="4rem !important"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        {/* <Image
          src={logo}
          boxSize="10"
          w="100"
          objectFit="fill"
          loading="lazy"
          alt="Sanjam Dev logo"
        /> */}
        <Stack direction={"row"} spacing={6}>
          {pagesData.map((i) => (
            <Link as={RLink} to={i.link} key={i.key}>
              {i.title}
            </Link>
          ))}
           <a  href="https://navdeep167.hashnode.dev/" >
              Blogs
            </a>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "white")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© {new Date().getFullYear()} Navdeep Singh</Text>
          <Stack direction={"row"} spacing={6}>
            {socialLinkData.map((i) => (
              <RoundSocialButton
                label={i.title}
                href={i.link}
                key={i.key}
                icon={i.icon}
                disableToolTip
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
