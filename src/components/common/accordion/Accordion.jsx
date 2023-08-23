import { useState } from "react";
import {
  Box,
  Text,
  Icon,
  Link,
  VStack,
  HStack,
  Heading,
  ListItem,
  SlideFade,
  useColorMode,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import ICONS from "../../../constants/icons";

export default function Accordion({
  id,
  link,
  title,
  timeline,
  subtitle,
  description,
  data,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openedDesc, setOpenedDesc] = useState("");
  const { colorMode } = useColorMode();

  const handleOpen = (id) => {
    onOpen();
    setOpenedDesc(id);
  };

  const handleClose = () => {
    onClose();
    setOpenedDesc("");
  };

  return (
    <VStack w="full" spacing={4} align="stretch">
      <>
        <HStack
          p="3"
          h="60px"
          id={id}
          borderRadius="5px"
          spacing="-3"
          border={colorMode === "light" ? "1px black solid" : "1px white solid"}
          onMouseEnter={() => handleOpen(id)}
          onMouseLeave={handleClose}
          transition={
            "background 0.3s ease, top 0.5s ease, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;"
          }
        >
          <VStack w="full" spacing="0" align="stretch" p="3">
            <Box
              w="full"
              display="flex"
              direction="row"
              justifyContent="space-between"
            >
              <Link isExternal href={link} textDecoration="none !important">
                <Heading fontSize="md">
                  {title} <Icon as={ICONS.EXTERNAL_LINK} />
                </Heading>
              </Link>

              <Text
                fontSize="sm"
                color={
                  colorMode === "light"
                    ? "var(--chakra-colors-gray-600)"
                    : "var(--chakra-colors-gray-50)"
                }
              >
                {timeline}
              </Text>
            </Box>

            <Box
              w="full"
              display="flex"
              direction="row"
              justifyContent="space-between"
            >
              <Text
                fontSize="sm"
                color={
                  colorMode === "light"
                    ? "var(--chakra-colors-gray-600)"
                    : "var(--chakra-colors-gray-50)"
                }
              >
                {subtitle}
              </Text>
            </Box>
          </VStack>
        </HStack>
        {openedDesc === id && (
          <SlideFade
            in={isOpen && openedDesc === id}
            transition={
              "background 0.3s ease, top 0.5s ease, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;"
            }
            unmountOnExit
          >
            <Box
              w="full"
              p="5"
              mt="-4"
              backgroundColor={
                colorMode === "light"
                  ? "var(--chakra-colors-blue-50)"
                  : "var(--chakra-colors-blue-900)"
              }
              borderRadius="0 0 8px 8px"
              color={
                colorMode === "light"
                  ? "var(--chakra-colors-gray-700)"
                  : "white"
              }
              onMouseEnter={() => handleOpen(id)}
              onMouseLeave={handleClose}
            >
              <Text
                color={
                  colorMode === "light"
                    ? "var(--chakra-colors-gray-700)"
                    : "white"
                }
              >
                {description}
              </Text>
              <UnorderedList
                color={
                  colorMode === "light"
                    ? "var(--chakra-colors-gray-700)"
                    : "white"
                }
              >
                {data?.map((d, k) => (
                  <ListItem key={k}>{d}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          </SlideFade>
        )}
      </>
    </VStack>
  );
}
