import React from "react";

import { Text, Img, Line, Input, CheckBox, Button } from "components";

const SignupWrongemailPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-lime_50 flex md:flex-col flex-row gap-[154px] md:gap-[40px] items-start justify-start p-[61px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[137px] md:gap-[40px] justify-start md:ml-[0] ml-[43px] md:mt-[0] mt-[38px] md:w-[100%] w-[39%]">
            <Text
              className="leading-[40.00px] md:ml-[0] ml-[27px] text-bluegray_900 text-center sm:w-[100%] w-[50%]"
              as="h1"
              variant="h1"
            >
              Manage your work more effectively
            </Text>
            <Img
              src="images/img_workingtime_1.svg"
              className="h-[483px] w-[auto]"
              alt="WorkingTime"
            />
          </div>
          <div className="bg-white_A700 flex md:flex-1 items-center justify-end p-[50px] md:px-[20px] rounded-[20px] shadow-bs1 md:w-[100%] w-[36%]">
            <div className="flex flex-col gap-[46px] justify-start md:w-[100%] w-[93%]">
              <Text
                className="md:ml-[0] ml-[152px] text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Login to Avori
              </Text>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="bg-white_A700 border-[1px] border-indigo_51 border-solid flex items-start justify-end p-[17px] rounded-[4px] md:w-[100%] w-[95%]">
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[7px] mr-[auto] mt-[2px] md:w-[100%] w-[65%]">
                    <Img
                      src="images/img_group.svg"
                      className="h-[18px] mb-[2px] w-[18px]"
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
                <div className="flex flex-row items-start justify-between mt-[61px] md:w-[100%] w-[98%]">
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
                <div className="flex flex-col gap-[12px] items-start justify-start mt-[54px] md:w-[100%] w-[95%]">
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex pb-[16px] pl-[20px] pr-[35px] pt-[21px] rounded-[4px] sm:pr-[20px] w-[100%]"
                    type="email"
                    name="email One"
                    placeholder="Ackermanlhn@gmail.com"
                    prefix={
                      <Img
                        src="images/img_icon.svg"
                        className="mr-[16px] my-[auto]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                </div>
                <Text
                  className="font-normal mt-[11px] not-italic text-left text-red_600 w-[auto]"
                  variant="body1"
                >
                  Please enter a valid email address
                </Text>
                <Text
                  className="font-medium mt-[56px] text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Password
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex mt-[12px] pl-[20px] pr-[35px] py-[19px] rounded-[4px] sm:pr-[20px] sm:w-[100%] w-[95%]"
                  type="password"
                  name="password"
                  placeholder="************"
                  prefix={
                    <Img
                      src="images/img_icon_1.svg"
                      className="mr-[16px] my-[auto]"
                      alt="Icon "
                    />
                  }
                ></Input>
                <div className="flex flex-row items-start justify-between ml-[auto] mt-[64px] md:w-[100%] w-[96%]">
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
                <Button className="bg-deep_orange_300 cursor-pointer font-bold sm:min-w-[100%] min-w-[414px] mt-[82px] py-[21px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  LOGIN
                </Button>
                <Text
                  className="font-medium md:ml-[0] ml-[92px] mt-[43px] text-bluegray_800 text-left w-[auto]"
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

export default SignupWrongemailPage;
