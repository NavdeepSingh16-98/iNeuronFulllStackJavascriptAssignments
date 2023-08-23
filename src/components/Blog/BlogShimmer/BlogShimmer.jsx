import {
  Box,
  Skeleton,
  SkeletonText,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function BlogShimmer() {
  return (
    <Box
      overflow="hidden"
      boxShadow="lg"
      padding="3"
      bg={useColorModeValue("", "whiteAlpha.100")}
      w="3xl"
    >
      <Stack direction={{ base: "column" }}>
        <Skeleton height="32" maxW={{ base: "100%" }} />
        <SkeletonText mt="4" noOfLines={3} spacing="2" skeletonHeight="2" />
      </Stack>
    </Box>
  );
}
