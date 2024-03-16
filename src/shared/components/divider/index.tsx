import { type FC } from "react";
import cn from "~/shared/utils/cn";

type Props = {
  className?: string;
};

const Divider: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex-grow border-t border-[#E3E6E9]"></div>
      <span className="bg-white px-[5px] text-xs text-[#BEC5CC]">OR</span>
      <div className="flex-grow border-t border-[#E3E6E9]"></div>
    </div>
  );
};

export default Divider;
