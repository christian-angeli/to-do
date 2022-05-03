import { ButtonHTMLAttributes } from "react";

import { ActiveButton, DisabledButton } from "./styles";
import iconCheck from "../../assets/icon-check.svg";

interface CompletedButtonInterface
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export function CompletedButton({
  isActive,
  ...rest
}: CompletedButtonInterface) {
  return (
    <>
      {isActive === true ? (
        <ActiveButton {...rest}></ActiveButton>
      ) : (
        <DisabledButton {...rest}>
          <img src={iconCheck}></img>
        </DisabledButton>
      )}
    </>
  );
}
