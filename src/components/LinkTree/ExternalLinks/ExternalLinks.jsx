import linktreeExternalButtonData from "../../../constants/linktreeExternalButtonData";
import SquareExternalButton from "../../common/button/SquareExternalButton";

export default function ExternalLinks() {
  return (
    <>
      {linktreeExternalButtonData.map((data) => (
        <SquareExternalButton
          key={data.key}
          href={data.link}
          label={data.title}
        />
      ))}
    </>
  );
}
