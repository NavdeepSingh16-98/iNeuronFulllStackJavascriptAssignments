import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ExternalLinkButton from "../button/ExternalLinkButton";

export default function ImageCardWithExtLink(props) {
  const { img, imgAlt, title, description, href } = props;
  return (
    <Card
      maxW="sm"
      bg={useColorModeValue("", "whiteAlpha.100")}
      _hover={{
        transform: "scale(1.1)",
      }}
      transition={
        "background 0.5s ease, top 0.5s ease, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;"
      }
    >
      <CardBody>
        <Image
          src={img}
          alt={imgAlt || "Some Image"}
          borderRadius="lg"
          loading="lazy"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" display={"flex"} justifyContent={"space-between"}>
            {title}
            <ExternalLinkButton href={href} />
          </Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
