import React from "react";

import { Text, Img, Line, Input, Button } from "components";

const SignupDefaultPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-red_53 flex md:flex-col flex-row md:gap-[40px] items-start justify-between p-[69px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[101px] md:gap-[40px] items-start justify-start md:ml-[0] ml-[69px] md:mt-[0] mt-[24px] md:w-[100%] w-[31%]">
            <Text
              className="leading-[40.00px] md:ml-[0] ml-[2px] text-bluegray_900 text-center sm:w-[100%] w-[72%]"
              as="h1"
              variant="h1"
            >
              Don&#39;t worry about overwhelming tasks
            </Text>
            <Img
              src="images/img_group7.svg"
              className="h-[597px] w-[auto]"
              alt="GroupSeven"
            />
          </div>
          <div className="flex md:flex-1 items-center justify-start mr-[189px] md:w-[100%] w-[36%]">
            <div className="bg-white_A700 flex flex-col gap-[39px] items-center justify-start p-[38px] sm:px-[20px] rounded-[20px] shadow-bs1 w-[100%]">
              <div className="flex flex-col gap-[46px] items-center justify-start md:w-[100%] w-[90%]">
                <Text
                  className="text-bluegray_800 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Sign up to Avori
                </Text>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="bg-white_A700 border-[1px] border-indigo_51 border-solid flex items-start justify-end p-[17px] rounded-[4px] md:w-[100%] w-[93%]">
                    <div className="flex flex-row gap-[98px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] mt-[2px] md:w-[100%] w-[67%]">
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
                        Sign up with Google
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end ml-[auto] mt-[61px] md:w-[100%] w-[96%]">
                    <Line className="bg-indigo_51 h-[1px] sm:mt-[0] my-[6px] w-[39%]" />
                    <Text
                      className="font-normal sm:ml-[0] ml-[67px] not-italic text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Or
                    </Text>
                    <Line className="bg-indigo_51 h-[1px] sm:ml-[0] ml-[17px] sm:mt-[0] my-[6px] w-[39%]" />
                  </div>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex mt-[51px] pl-[20px] pr-[35px] py-[19px] rounded-[4px] sm:pr-[20px] sm:w-[100%] w-[93%]"
                    type="text"
                    name="Textinput"
                    placeholder="Full name"
                    prefix={
                      <Img
                        src="images/img_icon_2.svg"
                        className="mr-[16px] my-[auto]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex mt-[53px] pl-[20px] pr-[35px] py-[19px] rounded-[4px] sm:pr-[20px] sm:w-[100%] w-[93%]"
                    type="email"
                    name="Textinput One"
                    placeholder="Email"
                    prefix={
                      <Img
                        src="images/img_icon.svg"
                        className="mr-[16px] my-[auto]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex mt-[43px] px-[20px] py-[19px] rounded-[4px] sm:w-[100%] w-[93%]"
                    type="password"
                    name="Textinput Two"
                    placeholder="Password"
                    prefix={
                      <Img
                        src="images/img_icon_1.svg"
                        className="mr-[16px] my-[auto]"
                        alt="Icon "
                      />
                    }
                    suffix={
                      <Img
                        src="images/img_icon_icon_eye_property_3298.svg"
                        className="ml-[35px] my-[auto]"
                        alt="Icon /Icon/Eye/Property 3298"
                      />
                    }
                  ></Input>
                  <Text
                    className="font-medium leading-[22.00px] md:ml-[0] ml-[50px] mt-[74px] text-bluegray_800 text-center sm:w-[100%] w-[71%]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-bluegray_400 text-[14px] font-inter">
                      By clicking “SIGN UP&quot; button, I agree with your
                    </span>
                    <span className="text-bluegray_800 text-[14px] font-inter">
                      {" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-bluegray_800 text-[14px] font-inter underline"
                    >
                      Term and Policy
                    </a>
                  </Text>
                  <Button className="bg-deep_orange_300 cursor-pointer font-bold sm:min-w-[100%] min-w-[414px] mt-[54px] py-[21px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                    SIGN UP
                  </Button>
                </div>
              </div>
              <Text
                className="font-medium mb-[4px] text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-bluegray_800 text-[14px] font-inter font-normal not-italic">
                  You have an account already?
                </span>
                <span className="text-bluegray_800 text-[14px] font-inter">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-deep_orange_300 text-[14px] font-inter underline"
                >
                  Sign in
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupDefaultPage;
