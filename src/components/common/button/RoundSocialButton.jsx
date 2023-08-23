import {
  Icon,
  chakra,
  Tooltip,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

export default function RoundSocialButton(props) {
  const { icon, label, href, disableToolTip } = props;
  return (
    <Tooltip isDisabled={disableToolTip} label={label} hasArrow >
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        target="_blank"
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: "#aeccec",
          color: "#000",
          transform: "scale(1.5)",
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon as={icon} />
      </chakra.button>
    </Tooltip>
  );
}
