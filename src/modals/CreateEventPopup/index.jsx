import React from "react";
import ModalProvider from "react-modal";

import { Text, Input, SelectBox, Img, Button } from "components";

const CreateEventPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mt-[56px] p-[32px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <div className="flex flex-col gap-[20px] items-start justify-end pr-[4px] py-[4px] md:w-[100%] w-[auto]">
              <Text
                className="text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Create new event
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Add new event in the calendar
              </Text>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start mt-[36px] w-[100%]">
              <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Event name
                </Text>
                <Input
                  className="font-normal not-italic pb-[16px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[21px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                  type="text"
                  name="Group2531"
                  placeholder="Type name"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Select category
                </Text>
                <SelectBox
                  className="bg-white_A700 border-[1px] border-indigo_51 border-solid font-semibold pb-[15px] pl-[20px] pt-[21px] rounded-[4px] text-[16px] text-bluegray_800 text-left w-[100%]"
                  placeholderClassName="text-bluegray_800"
                  name="Group2532"
                  placeholder="Data project"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[20px] mr-[20px] w-[20px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start mt-[32px] w-[100%]">
              <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[199px] py-[21px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                Create now
              </Button>
              <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[199px] py-[21px] rounded-[28px] text-[14px] text-bluegray_800 text-center w-[auto]">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default CreateEventPopupModal;
