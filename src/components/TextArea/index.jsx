import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineIndigo50: "bg-white_A700 border-[1px] border-indigo_50 border-solid",
};
const shapes = { RoundedBorder4: "rounded-[4px]" };
const sizes = { sm: "pb-[35px] pt-[22px] sm:px-[20px] px-[22px]" };

const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            sizes[size] || ""
          } ${variants[variant] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineIndigo50"]),
  size: PropTypes.oneOf(["sm"]),
};

TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo50",
  size: "sm",
};
export { TextArea };
