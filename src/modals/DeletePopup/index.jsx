import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const DeletePopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col justify-start pl-[4px] md:px-[20px] py-[4px] rounded-[4px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_xcircle.svg"
              className="h-[40px] md:ml-[0] ml-[434px] w-[40px]"
              alt="xcircle"
            />
            <Img
              src="images/img_12.svg"
              className="h-[175px] md:ml-[0] ml-[149px] mt-[20px] w-[auto]"
              alt="Twelve"
            />
            <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[71px] mt-[58px] md:w-[100%] w-[auto]">
              <Text
                className="text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Are you sure to delete item?
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                This item will be delete from your cart
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start mb-[28px] md:ml-[0] ml-[28px] mr-[32px] mt-[48px] md:w-[100%] w-[88%]">
              <Button className="bg-red_600 cursor-pointer font-bold min-w-[199px] py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                Yes, Delete item
              </Button>
              <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[199px] py-[20px] rounded-[28px] text-[14px] text-bluegray_800 text-center w-[auto]">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DeletePopupModal;
