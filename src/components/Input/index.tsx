import { InputHTMLAttributes } from "react";
import { InputLabel } from "./styles";

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//
// }

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <InputLabel {...rest} />;
}
