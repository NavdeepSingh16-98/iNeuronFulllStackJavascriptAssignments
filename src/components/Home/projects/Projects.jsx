import { Stack,Link,Heading,Icon } from "@chakra-ui/react";
import ImageCardWithExtLink from "../../common/cards/ImageCardWithExtLink";
import projectsData from "../../../constants/projectsData";
import ICONS from "../../../constants/icons";

export default function Projects() {
  return (
    <div>
     <Link isExternal href="https://navdeep-portfolio-projects.netlify.app/" textDecoration="none !important" style={{color:"blue"}}>
                <Heading fontSize="md">
                  Link To All Personal Projects <Icon as={ICONS.EXTERNAL_LINK} />
                </Heading>
              </Link>
    <Stack direction={["column", "row"]} spacing="10" w="full">
     
<br/>
      {projectsData.map((data) => (
        <ImageCardWithExtLink
          key={data.key}
          img={data.img}
          imgAlt={data.imgAlt}
          title={data.title}
          description={data.description}
          href={data.href}
        />
      ))}
    </Stack>
    </div>
  );
}
