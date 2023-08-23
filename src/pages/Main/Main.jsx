import { VStack } from "@chakra-ui/react";

import SectionLayout from "../../components/common/layout/SectionLayout";
import Introduction from "../../components/Home/introduction/Introduction";
import { sectionsData } from "../../constants/sectionsData";

export default function Main() {
  return (
    <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
      <VStack as="main" flex={1} w="full" spacing="24">
        <Introduction />
        {sectionsData.map((i, k) => (
          <SectionLayout
            key={k}
            heading={i.title}
            subheading={i.subtitle}
            section={<i.component />}
          />
        ))}
      </VStack>
    </VStack>
  );
}
