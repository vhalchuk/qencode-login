import {
  type DetailedHTMLProps,
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import cn from "~/shared/utils/cn";

export type InputFieldProps = {
  containerClassName?: string;
  rightAdornment?: ReactNode;
  isError?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputField: FC<InputFieldProps> = ({
  containerClassName,
  rightAdornment,
  isError,
  ...inputProps
}) => {
  return (
    <div
      className={cn(
        isError && "ring-2 ring-red-500",
        "relative flex h-[48px] w-full rounded-md border-[1.2px] border-[#D3D8DC] focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500",
        containerClassName,
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
