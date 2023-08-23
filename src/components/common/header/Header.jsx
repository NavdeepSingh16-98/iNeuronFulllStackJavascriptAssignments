import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Tooltip,
  //useColorMode,
  useDisclosure,
  //Image,
} from "@chakra-ui/react";
import { BsCommand } from "react-icons/bs";
import { Link } from "react-router-dom";

import Search from "./../search/Search";
import "./header.css";
//import logoWt from "../../../assets/images/logo-wt.webp";
//import logoDk from "../../../assets/images/logo-dk.webp";

export default function Header() {
  //const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [shortcut, setShortcut] = useState();
  //const logo = colorMode === "light" ? logoWt : logoDk;

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf("Mac OS X") !== -1 ? "Cmd + K" : "Ctrl + K"
    );
  }, [setShortcut]);

  return (
    <>
      <nav className="nav-style">
        <Box
          px={4}
          style={{ width: "100%" }}
          // bg={colorMode === "light" ? "white" : "#1A202C"}
        >
          <Search isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Link to="/">
              {/* <Image
                src={logo}
                boxSize="8"
                w="100"
                objectFit="fill"
                loading="lazy"
                alt="Sanjam Dev logo"
              /> */}
            </Link>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Tooltip label={`Command Palette (${shortcut})`} hasArrow>
                  <IconButton
                    aria-label="toggle theme"
                    icon={<BsCommand />}
                    onClick={onOpen}
                    size="sm"
                    variant="ghost"
                  />
                </Tooltip>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </nav>
    </>
  );
}
