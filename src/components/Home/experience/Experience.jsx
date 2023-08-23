import experienceData from "../../../constants/experienceData";
import Accordion from "../../common/accordion/Accordion";

export default function Experience() {
  return (
    <>
      {experienceData?.map((experience) => (
        <Accordion key={experience?.id} {...experience} />
      ))}
    </>
  );
}
