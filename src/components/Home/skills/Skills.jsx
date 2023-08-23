import {
  Stack,
  Heading,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import skillsListData from "../../../constants/skillsListData";
import RoundSocialButton from "../../common/button/RoundSocialButton";

export default function Skills() {
  return skillsListData.map((s) => (
    <VStack spacing={["5", "36"]} align="stretch" key={s.key}>
      <Stack
        direction="row"
        spacing={"4"}
        h="3"
        my={[s.children.length * 2, "4"]}
      >
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(1, 1fr)"
          gap="1"
        >
          <GridItem display="flex" direction="row" rowSpan={2} colSpan={1}>
            <Heading as="h3" size="md" pr="5">
              {s.title}
            </Heading>
          </GridItem>
          <GridItem display="flex" direction="row" rowSpan={2} colSpan={1}>
            <SimpleGrid columns={[3, 5, 10]} spacing={[3, 10]}>
              {s.children.map((i) => (
                <RoundSocialButton label={i.title} key={i.key} icon={i.icon} />
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Stack>
    </VStack>
  ));
}
