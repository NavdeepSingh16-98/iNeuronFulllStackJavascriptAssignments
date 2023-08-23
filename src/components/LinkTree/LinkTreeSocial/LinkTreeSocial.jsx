import { Stack } from "@chakra-ui/react";
import socialLinkData from "../../../constants/socialLinkData";
import RoundSocialButton from "../../common/button/RoundSocialButton";

export default function LinkTreeSocial() {
  return (
    <>
      <Stack direction={"row"} spacing={6}>
        {socialLinkData.map((i) => (
          <RoundSocialButton
            label={i.title}
            href={i.link}
            key={i.key}
            icon={i.icon}
            disableToolTip
          />
        ))}
      </Stack>
    </>
  );
}
