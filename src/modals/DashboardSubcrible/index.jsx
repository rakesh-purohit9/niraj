import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[35px] items-start justify-start mt-[65px] p-[32px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <div className="flex flex-col gap-[21px] items-start justify-start md:w-[100%] w-[auto]">
              <Text
                className="text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Subcrible
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Subcribe our newletter and get notification to stay update
              </Text>
            </div>
            <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
              <Text
                className="font-medium text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <div className="h-[56px] relative w-[100%]">
                <Img
                  src="images/img_iconsendglyph.svg"
                  className="h-[20px] ml-[auto] mr-[20px] my-[auto] w-[20px]"
                  alt="IconSendGlyph"
                />
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="absolute bg-white_A700 border-[1px] border-indigo_51 border-solid flex inset-[0] justify-center m-[auto] pb-[16px] pl-[20px] pr-[35px] pt-[21px] rounded-[4px] sm:pr-[20px] w-[100%]"
                  type="email"
                  name="email One"
                  placeholder="Ackermanlhn@gmail.com"
                  prefix={
                    <Img
                      src="images/img_icon.svg"
                      className="mr-[16px] right-[4%] absolute my-[auto]"
                      alt="Icon "
                    />
                  }
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardSubcribleModal;
