import React from "react";

import { Img, Text, Button } from "components";

const SignupVerificationPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-lime_51 flex items-center justify-end p-[67px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-white_A700 flex sm:flex-col flex-row gap-[33px] items-start justify-start p-[48px] md:px-[20px] rounded-[20px] shadow-bs1 md:w-[100%] w-[39%]">
            <Img
              src="images/img_iconiconline294.svg"
              className="h-[24px] sm:mt-[0] mt-[11px] w-[24px]"
              alt="IconIconLine294"
            />
            <div className="flex flex-col md:gap-[40px] gap-[62px] items-center justify-start mb-[9px] sm:mt-[0] mt-[6px] sm:w-[100%] w-[79%]">
              <Img
                src="images/img_group_4.svg"
                className="h-[182px] w-[auto]"
                alt="Group"
              />
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <Text
                    className="text-bluegray_800 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    2-Step Vertification
                  </Text>
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-center w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    We sent a vertìication code to your email. Enter the code
                    from the email in the field below
                  </Text>
                </div>
                <div className="gap-[20px] mt-[124px] w-[92%]"></div>
                <Button className="bg-deep_orange_300 cursor-pointer font-bold sm:min-w-[100%] min-w-[414px] mt-[103px] py-[21px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  SEND RESET INSTRUCTIONS
                </Button>
                <Text
                  className="font-medium mt-[51px] text-indigo_400 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  You haven’t received it? Resend a new code
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupVerificationPage;
