import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const SigninResetPasswordSuModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[36%]"
        overlayClassName="bg-red_52 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-end p-[83px] md:px-[20px] rounded-[20px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_group5.svg"
              className="h-[132px] mt-[22px] w-[auto]"
              alt="GroupFive"
            />
            <Text
              className="leading-[32.00px] mt-[263px] text-bluegray_800 text-center sm:w-[100%] w-[60%]"
              as="h2"
              variant="h2"
            >
              Password has been recovered
            </Text>
            <Button className="bg-deep_orange_300 cursor-pointer font-bold sm:min-w-[100%] min-w-[414px] mt-[84px] py-[21px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
              LOGIN
            </Button>
            <div className="flex flex-row gap-[7px] items-start justify-center mt-[63px] md:w-[100%] w-[29%]">
              <Img
                src="images/img_chevronleft.svg"
                className="h-[20px] w-[20px]"
                alt="chevronleft"
              />
              <Text
                className="font-medium mt-[4px] text-indigo_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Back to Sign in
              </Text>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default SigninResetPasswordSuModal;
