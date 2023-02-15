import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const NoPromotionPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start pb-[32px] pl-[32px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-end ml-[auto] md:w-[100%] w-[87%]">
              <div className="bg-white_A700 md:h-[194px] h-[298px] p-[47px] sm:px-[20px] md:px-[40px] relative w-[298px]">
                <Img
                  src="images/img_group_bluegray_900.svg"
                  className="absolute h-[194px] inset-[0] justify-center m-[auto] w-[auto]"
                  alt="Group"
                />
              </div>
              <Img
                src="images/img_xcircle.svg"
                className="h-[40px] sm:mt-[0] mt-[4px] w-[40px]"
                alt="xcircle"
              />
            </div>
            <div className="flex flex-col gap-[21px] items-center justify-start md:w-[100%] w-[auto]">
              <Text
                className="text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                No promotion
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Follow us to review lattest promotion
              </Text>
            </div>
            <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[199px] mt-[48px] py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
              Yes, I understand
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default NoPromotionPopupModal;
