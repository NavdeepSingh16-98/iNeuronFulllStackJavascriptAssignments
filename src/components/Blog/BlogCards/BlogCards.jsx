import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Tag,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import ICONS from "../../../constants/icons";

export default function BlogCards({
  url,
  title,
  tag_list,
  description,
  social_image,
  readable_publish_date,
}) {
  const { colorMode } = useColorMode();

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      bg={useColorModeValue("", "whiteAlpha.100")}
      transition={
        "background 0.5s ease, top 0.5s ease, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;"
      }
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={social_image}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">
            <Link
              href={url}
              target="__blank"
              rel="nofollow noopener noreferrer"
              isExternal
            >
              {title} <Icon as={ICONS?.EXTERNAL_LINK} />
            </Link>
          </Heading>
          <Text py="2">{description}</Text>
        </CardBody>
        <Divider />
        <CardFooter display="flex" justifyContent="space-between">
          <div>
            {tag_list?.map((tag) => (
              <Tag
                size="sm"
                key={tag}
                variant="solid"
                colorScheme="teal"
                mr="1"
                borderRadius="full"
                backgroundColor={
                  colorMode === "light"
                    ? "var(--chakra-colors-blue-50)"
                    : "var(--chakra-colors-blue-900)"
                }
                color={
                  colorMode === "light"
                    ? "var(--chakra-colors-gray-700)"
                    : "white"
                }
              >
                #{tag}
              </Tag>
            ))}
          </div>
          <Text>| Published on: {readable_publish_date}</Text>
        </CardFooter>
      </Stack>
    </Card>
  );
}
