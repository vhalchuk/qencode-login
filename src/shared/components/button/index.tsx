import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type FC,
} from "react";
import cn from "~/shared/utils/cn";

type Props = {
  variant: "primary" | "secondary";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({ className, variant, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "flex h-[48px] w-full items-center justify-center gap-[10px] rounded-md",
        variant === "primary" && "bg-[#316FEA] text-white",
        variant === "secondary" && "border-[1.2px] border-[#D3D8DC]",
        className,
      )}
    />
  );
};

export default Button;
