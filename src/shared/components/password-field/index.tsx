import {
  type DetailedHTMLProps,
  type FC,
  type InputHTMLAttributes,
  useState,
} from "react";
import InputField from "~/shared/components/input-field";
import Eye from "~/shared/svg-icons/eye.tsx";
import cn from "~/shared/utils/cn";

const PasswordField: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <InputField
      placeholder="Password"
      type={visible ? "text" : "password"}
      name="password"
      required
      rightAdornment={
        <button
          type="button"
          className={cn("px-3", visible ? "text-[#316FEA]" : "text-[#67717B]")}
          onClick={toggleVisibility}
        >
          <Eye />
        </button>
      }
      pattern=".{8,}"
      title="Password must be at least 8 characters long"
      {...props}
    />
  );
};

export default PasswordField;
