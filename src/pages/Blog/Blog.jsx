import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import LinkTreeSocial from "../../components/LinkTree/LinkTreeSocial/LinkTreeSocial";
import LinkTreeHeader from "../../components/LinkTree/LinkTreeHeader/LinkTreeHeader";
import BlogCards from "../../components/Blog/BlogCards/BlogCards";
import { devToAPI } from "../../constants/links";
import BlogShimmer from "../../components/Blog/BlogShimmer/BlogShimmer";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    fetch(`${devToAPI}&page=${page}`, {
      method: "GET",
      headers: {
        origin: "http://localhost:3000",
        Accept: "application/vnd.forem.api-v1+json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <VStack alignItems="center" flex={1} w="full">
      <VStack as="main" maxWidth="3xl" align={"center"} spacing="5">
        <LinkTreeHeader />
        {articles?.length === 0
          ? Array(3)
              ?.fill("")
              ?.map((i, index) => <BlogShimmer key={index} />)
          : articles?.map((data) => (
              <BlogCards
                key={data?.id}
                url={data?.url}
                title={data?.title}
                tag_list={data?.tag_list}
                description={data?.description}
                social_image={data?.social_image}
                readable_publish_date={data?.readable_publish_date}
              />
            ))}
        <span style={{ marginBottom: "2rem" }}></span>
        <LinkTreeSocial />
      </VStack>
    </VStack>
  );
}
