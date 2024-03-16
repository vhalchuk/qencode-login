import { type DetailedHTMLProps, type FC, HTMLAttributes } from "react";
import cn from "~/shared/utils/cn";

const FieldError: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
  return (
    <em {...props} className={cn("block text-red-600", props.className)} />
  );
};

export default FieldError;
