import {
  type DetailedHTMLProps,
  type FC,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import cn from "~/shared/utils/cn";

type Props = {
  containerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  rightAdornment?: ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputField: FC<Props> = ({
  containerProps,
  rightAdornment,
  ...inputProps
}) => {
  return (
    <div
      {...containerProps}
      className={cn(
        "relative flex h-[48px] w-full rounded-md border-[1.2px] border-[#D3D8DC] focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500",
        containerProps?.className,
      )}
    >
      <input
        {...inputProps}
        className={cn(
          "h-full w-full rounded-md px-3 text-[15px] text-[#060E1E] outline-none",
          inputProps?.className,
        )}
      />
      {rightAdornment && (
        <div className="flex h-full items-center">{rightAdornment}</div>
      )}
    </div>
  );
};

export default InputField;
