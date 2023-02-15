import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, List, Line, Button } from "components";

const CartModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[29%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[48px] items-center justify-center p-[48px] md:px-[20px] w-[100%]">
            <div className="flex flex-row items-end justify-between mt-[4px] w-[100%]">
              <Text
                className="mt-[6px] text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                My Cart
              </Text>
              <Img
                src="images/img_plus_1.svg"
                className="h-[32px] w-[32px]"
                alt="x"
              />
            </div>
            <div className="flex flex-col items-start justify-start mb-[16px] w-[100%]">
              <List
                className="flex-col gap-[34.05px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-[24px] items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="sm:flex-1 h-[118px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                    alt="Rectangle"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-[0] mt-[2px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Polo Shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="h-[24px] w-[24px]"
                          alt="minus"
                        />
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[24px] md:w-[100%] w-[43%]">
                      <div className="border-[1px] border-indigo_51 border-solid md:h-[20px] h-[32px] p-[6px] relative w-[32px]">
                        <Img
                          src="images/img_minus.svg"
                          className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                          alt="minus One"
                        />
                      </div>
                      <Text
                        className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <div className="border-[1px] border-indigo_51 border-solid md:h-[20px] h-[32px] ml-[21px] p-[6px] relative w-[32px]">
                        <Img
                          src="images/img_plus_1.svg"
                          className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                          alt="plus"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[27px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                <div className="flex flex-1 sm:flex-col flex-row gap-[24px] items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="sm:flex-1 h-[118px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                    alt="Rectangle One"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-[0] mt-[2px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Basic T-shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="h-[24px] w-[24px]"
                          alt="minus One"
                        />
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[24px] md:w-[100%] w-[43%]">
                      <div className="border-[1px] border-indigo_51 border-solid md:h-[20px] h-[32px] p-[6px] relative w-[32px]">
                        <Img
                          src="images/img_minus.svg"
                          className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                          alt="minus One One"
                        />
                      </div>
                      <Text
                        className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <div className="border-[1px] border-indigo_51 border-solid md:h-[20px] h-[32px] ml-[21px] p-[6px] relative w-[32px]">
                        <Img
                          src="images/img_plus_1.svg"
                          className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                          alt="plus One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[27px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-row items-start justify-between mt-[68px] w-[100%]">
                <Text
                  className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Total
                </Text>
                <Text
                  className="font-bold mt-[4px] text-bluegray_800 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  $240.0
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between mt-[32px] md:w-[100%] w-[98%]">
                <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[186px] py-[17px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                  Purchase now
                </Button>
                <Button className="bg-deep_orange_50 cursor-pointer font-bold min-w-[185px] py-[17px] rounded-[24px] text-[14px] text-center text-deep_orange_300 w-[auto]">
                  Add to cart
                </Button>
              </div>
              <div className="flex flex-row gap-[24px] items-center justify-start mt-[32px] md:w-[100%] w-[65%]">
                <Img
                  src="images/img_truck.svg"
                  className="h-[24px] w-[24px]"
                  alt="truck"
                />
                <div className="flex flex-col gap-[8px] items-start justify-end pr-[5px] pt-[5px] w-[auto]">
                  <Text
                    className="font-bold text-bluegray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Free nationwide shipping
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    (For order begin $100.0)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartModal;
