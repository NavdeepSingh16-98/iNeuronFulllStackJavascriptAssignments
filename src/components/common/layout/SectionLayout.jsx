import { VStack, Heading } from "@chakra-ui/react";

export default function SectionLayout(props) {
  const { heading, subheading, section } = props;
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading as="h1" size="lg">{heading}.</Heading>
      {subheading && (
        <Heading as="h6" size="xs" mt="3px !important">
          {subheading}
        </Heading>
      )}
      {section}
    </VStack>
  );
}
