import { Button, Icon } from "@chakra-ui/react";
import ICONS from "../../../constants/icons";

export default function ExternalLinkButton(props) {
  const { href } = props;

  return (
    <Button
      cursor={"pointer"}
      color="blue.500"
      as={"a"}
      href={href}
      target="_blank"
      variant="link"
      rightIcon={<Icon as={ICONS.EXTERNAL_LINK} />}
    >
      Link
    </Button>
  );
}
