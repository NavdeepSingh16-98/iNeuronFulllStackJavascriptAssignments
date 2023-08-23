import { Button, Icon, useColorModeValue } from "@chakra-ui/react";
import ICONS from "../../../constants/icons";

export default function SquareExternalButton(props) {
  const { label, href } = props;

  return (
    <Button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      w={"98%"}
      mx="1%"
      rounded={"5"}
      h={"3rem"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={
        "background 0.3s ease, top 0.5s ease, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;"
      }
      _hover={{
        bg: "#aeccec",
        color: "#000",
        transform: "scale(1.2)",
      }}
      rightIcon={<Icon as={ICONS.EXTERNAL_LINK} />}
    >
      {label}
    </Button>
  );
}
