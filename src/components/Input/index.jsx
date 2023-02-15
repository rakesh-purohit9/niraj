import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineBluegray200:
    "bg-white_A700 border-[1px] border-bluegray_200 border-solid",
  srcFillGray50: "bg-gray_50",
  srcOutlineBlack9000c: "bg-white_A700 shadow-bs",
  OutlineIndigo50: "bg-white_A700 border-[1px] border-indigo_50 border-solid",
  OutlineIndigo501_2: "border-[1px] border-indigo_50 border-solid",
  FillDeeporange300: "bg-deep_orange_300",
  FillGray50: "bg-gray_50",
};
const shapes = {
  srcRoundedBorder4: "rounded-[4px]",
  RoundedBorder4: "rounded-[4px]",
  RoundedBorder8: "rounded-[8px]",
  CustomBorderBL4:
    "rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px]",
};
const sizes = {
  smSrc: "p-[13px]",
  mdSrc: "pb-[16px] pt-[22px] px-[16px]",
  sm: "pb-[6px] pt-[13px] px-[6px]",
  md: "pb-[22px] pt-[17px] px-[17px]",
  lg: "p-[19px]",
  xl: "pb-[16px] pt-[22px] px-[16px]",
  "2xl": "p-[23px] sm:px-[20px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder4",
    "RoundedBorder4",
    "RoundedBorder8",
    "CustomBorderBL4",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineBluegray200",
    "srcFillGray50",
    "srcOutlineBlack9000c",
    "OutlineIndigo50",
    "OutlineIndigo501_2",
    "FillDeeporange300",
    "FillGray50",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md", "lg", "xl", "2xl"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineIndigo50",
  size: "smSrc",
};

export { Input };
