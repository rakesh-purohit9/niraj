import React from "react";
import ModalProvider from "react-modal";

import { Text, Input, Img, Button, Line } from "components";

const DashboardRechargemoneyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[53%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start mt-[65px] p-[28px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <Text
              className="mt-[4px] text-bluegray_800 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Pick a wallet
            </Text>
            <Input
              className="font-medium p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid flex mt-[32px] pl-[20px] pr-[35px] py-[19px] rounded-[4px] sm:pr-[20px] sm:w-[100%] w-[99%]"
              name="Textinput"
              placeholder="0.0"
              prefix={
                <Img
                  src="images/img_icon_10.svg"
                  className="mr-[16px] my-[auto]"
                  alt="Icon "
                />
              }
            ></Input>
            <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start mt-[32px] md:w-[100%] w-[78%]">
              <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[116px] py-[17px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                200.000đ
              </Button>
              <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[116px] py-[17px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                500.000đ
              </Button>
              <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[126px] py-[17px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                1.000.000đ
              </Button>
              <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[129px] py-[17px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                2.000.000đ
              </Button>
            </div>
            <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[99%]" />
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[31px] md:w-[100%] w-[99%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Available Wallet
                </Text>
                <Input
                  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="border-[1px] border-indigo_51 border-solid flex mt-[19px] pl-[16px] pr-[35px] py-[23px] rounded-[4px] sm:pr-[20px] w-[100%]"
                  name="WalletOptions"
                  placeholder="Torus"
                  prefix={
                    <Img
                      src="images/img_logo_32X32.svg"
                      className="mr-[10px] my-[auto]"
                      alt="Logo"
                    />
                  }
                ></Input>
                <div className="bg-gray_51 border-[1px] border-indigo_51 border-solid flex flex-row items-center justify-between mt-[16px] p-[16px] rounded-[4px] w-[100%]">
                  <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[32px] md:h-[auto] object-cover rounded-[5px] w-[32px]"
                      alt="MetaMaskIconZero"
                    />
                    <Text
                      className="font-semibold text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Metamask
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[20px] w-[20px]"
                    alt="arrowright"
                  />
                </div>
                <div className="border-[1px] border-indigo_51 border-solid flex flex-row gap-[10px] items-center justify-start mt-[16px] p-[16px] rounded-[4px] w-[100%]">
                  <div className="md:h-[26px] h-[32px] p-[2px] relative w-[32px]">
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[26px] inset-[0] justify-center m-[auto] object-cover w-[26px]"
                      alt="PortisIcon"
                    />
                  </div>
                  <Text
                    className="font-semibold text-bluegray_800 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Portis
                  </Text>
                </div>
                <div className="border-[1px] border-indigo_51 border-solid flex flex-row gap-[10px] items-center justify-start mt-[16px] p-[16px] rounded-[4px] w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[32px] md:h-[auto] object-cover w-[32px]"
                    alt="LogoFortmatic"
                  />
                  <Text
                    className="font-semibold text-bluegray_800 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Fortmatic
                  </Text>
                </div>
              </div>
              <Line className="bg-indigo_51 md:h-[1px] h-[344px] md:w-[100%] w-[1px]" />
              <div className="flex flex-col gap-[23px] items-center justify-start md:w-[100%] w-[auto]">
                <div className="md:h-[37px] h-[42px] relative w-[100%]">
                  <div className="absolute flex inset-x-[0] items-end justify-start mx-[auto] pl-[2px] py-[2px] top-[0] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[31%]">
                      <Img
                        src="images/img_icon_11.svg"
                        className="h-[20px] w-[20px]"
                        alt="Icon One"
                      />
                      <Text
                        className="font-medium text-indigo_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Refresh
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col gap-[7px] items-start justify-start left-[0] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      QR Code
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Scan this QR code{" "}
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_barcodeqr1.svg"
                  className="h-[279px] w-[auto]"
                  alt="barcodeqrOne"
                />
              </div>
            </div>
            <Button className="bg-deep_orange_300 cursor-pointer font-bold mb-[4px] md:min-w-[100%] min-w-[699px] mt-[32px] py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
              Pay now
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardRechargemoneyModal;
