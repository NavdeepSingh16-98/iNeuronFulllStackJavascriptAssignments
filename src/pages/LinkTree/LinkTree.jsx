import { VStack } from "@chakra-ui/react";
import ExternalLinks from "../../components/LinkTree/ExternalLinks/ExternalLinks";
import LinkTreeSocial from "../../components/LinkTree/LinkTreeSocial/LinkTreeSocial";
import LinkTreeHeader from "../../components/LinkTree/LinkTreeHeader/LinkTreeHeader";

export default function LinkTree() {
  return (
    <VStack alignItems="center" flex={1} w="full">
      <VStack as="main" maxWidth="3xl"  align={"center"}  spacing="5">
        <LinkTreeHeader />
        <ExternalLinks />
        <span style={{marginBottom: "2rem"}}></span>
        <LinkTreeSocial />
      </VStack>
    </VStack>
  );
}
