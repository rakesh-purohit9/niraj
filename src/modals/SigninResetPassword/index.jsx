import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Input, Button } from "components";

const SigninResetPasswordModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[37%]"
        overlayClassName="bg-red_52 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex sm:flex-col flex-row gap-[44px] items-start justify-start p-[48px] md:px-[20px] rounded-[20px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_iconiconline294.svg"
              className="h-[24px] sm:mt-[0] mt-[11px] w-[24px]"
              alt="IconIconLine294"
            />
            <div className="flex sm:flex-1 flex-col md:gap-[40px] gap-[68px] items-center justify-start mb-[10px] sm:mt-[0] mt-[6px] sm:w-[100%] w-[76%]">
              <Img
                src="images/img_group_182X168.svg"
                className="h-[182px] w-[auto]"
                alt="Group"
              />
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col md:gap-[40px] gap-[70px] justify-start w-[100%]">
                  <Text
                    className="md:ml-[0] ml-[133px] text-bluegray_800 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Forgot Password
                  </Text>
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-center"
                    as="h6"
                    variant="h6"
                  >
                    Enter the email address you used when you joined and we’ll
                    send you instructions to reset your password.
                    <br />
                    For security reasons, we do NOT store your password. So rest
                    assured that we will never send your password via email.
                  </Text>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start mt-[82px] w-[100%]">
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
                <Button className="bg-deep_orange_300 cursor-pointer font-bold sm:min-w-[100%] min-w-[414px] mt-[102px] py-[21px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  SEND RESET INSTRUCTIONS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default SigninResetPasswordModal;
