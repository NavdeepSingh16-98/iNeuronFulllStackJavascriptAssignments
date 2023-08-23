import educationData from "../../../constants/educationData";
import Accordion from "../../common/accordion/Accordion";

export default function Education() {
  return (
    <>
      {educationData?.map((education) => (
        <Accordion key={education?.id} {...education} />
      ))}
    </>
  );
}
