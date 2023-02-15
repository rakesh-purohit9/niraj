import React from "react";

import { Text, Img, Line, Input, CheckBox, Button } from "components";

const SigninDefaultPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-red_50 flex items-center justify-start p-[40px] sm:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1356px] mb-[38px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[143px] md:gap-[40px] items-center justify-start md:mt-[0] mt-[18px] md:w-[100%] w-[47%]">
              <Text
                className="leading-[40.00px] text-bluegray_900 text-center sm:w-[100%] w-[50%]"
                as="h1"
                variant="h1"
              >
                Manage your work more effectively
              </Text>
              <Img
                src="images/img_workingtime.svg"
                className="h-[483px] w-[auto]"
                alt="WorkingTime"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[46px] items-center justify-end p-[44px] sm:px-[20px] md:px-[40px] rounded-[20px] shadow-bs1 md:w-[100%] w-[43%]">
              <Text
                className="mt-[22px] text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Login to Avori
              </Text>
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[88%]">
                <div className="bg-white_A700 border-[1px] border-indigo_51 border-solid flex items-start justify-end p-[17px] rounded-[4px] md:w-[100%] w-[98%]">
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[6px] mr-[auto] md:w-[100%] w-[65%]">
                    <Img
                      src="images/img_group.svg"
                      className="h-[18px] w-[18px]"
                      alt="Group"
                    />
                    <Text
                      className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Login with Google
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[54px] w-[100%]">
                  <Line className="bg-indigo_51 h-[1px] my-[6px] w-[39%]" />
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Or
                  </Text>
                  <Line className="bg-indigo_51 h-[1px] my-[6px] w-[39%]" />
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start mt-[56px] md:w-[100%] w-[98%]">
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex pb-[16px] pl-[20px] pr-[35px] pt-[21px] rounded-[4px] sm:pr-[20px] w-[100%]"
                    type="email"
                    name="email One"
                    placeholder="Infor@gmail.com"
                    prefix={
                      <Img
                        src="images/img_icon.svg"
                        className="mr-[16px] my-[auto]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start mt-[31px] md:w-[100%] w-[98%]">
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Password
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex pl-[20px] pr-[35px] py-[19px] rounded-[4px] sm:pr-[20px] w-[100%]"
                    type="password"
                    name="password"
                    placeholder="************"
                    prefix={
                      <Img
                        src="images/img_icon_20X20.svg"
                        className="mr-[16px] my-[auto]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-row items-start justify-between mt-[113px] md:w-[100%] w-[99%]">
                  <CheckBox
                    className="font-medium text-[14px] text-bluegray_800 text-left"
                    inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                    label="Remember"
                    name="Remember"
                  ></CheckBox>
                  <a
                    className="font-medium mt-[5px] text-[14px] text-bluegray_800 text-left underline w-[auto]"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button className="bg-deep_orange_300 cursor-pointer font-bold sm:min-w-[100%] min-w-[414px] mt-[80px] py-[21px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  LOGIN
                </Button>
                <Text
                  className="font-medium mt-[56px] text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-bluegray_800 text-[14px] font-inter">
                    You don’t have an account yet?
                  </span>
                  <span className="text-bluegray_800 text-[14px] font-inter">
                    {" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-deep_orange_300 text-[14px] font-inter underline"
                  >
                    Sign up
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninDefaultPage;
