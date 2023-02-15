import React from "react";

import {
  Img,
  Text,
  Line,
  Input,
  TextArea,
  SelectBox,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images";

const ShippingInfoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[240px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[28px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[8px] w-[auto]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[460px] md:w-[100%] w-[86%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_icon_3.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[33px] md:w-[100%] w-[65%]">
                  <Img
                    src="images/img_icon_4.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon One"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[34px] items-center justify-between md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                    <Img
                      src="images/img_icon_5.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="Icon Two"
                    />
                    <Text
                      className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-bold h-[24px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_icon_6.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Three"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[33px] md:w-[100%] w-[62%]">
                  <Img
                    src="images/img_icon_7.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Four"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start md:ml-[0] ml-[3px] mt-[34px] md:w-[100%] w-[45%]">
                  <Img
                    src="images/img_icon_17.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="Icon Five"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[33px] md:w-[100%] w-[42%]">
                  <Img
                    src="images/img_icon_9.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Six"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] w-[61%]">
                  <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-bluegray_400 h-[20px] rounded-[50%] w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1px] h-[990px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <header className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mx-[auto] my-[10px] w-[96%]">
                <div className="header-row mt-[14px] mb-[9px]">
                  <Text
                    className="font-medium text-bluegray_800 text-left"
                    as="h6"
                    variant="h6"
                  >
                    Welcomback, Team!
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium sm:hidden p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="bg-gray_51 flex md:ml-[0] md:w-[100%] ml-[227px] pl-[16px] pr-[22px] py-[13px] rounded-[4px] sm:hidden sm:pr-[20px] sm:w-[100%] w-[38%]"
                  name="SearchBox"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[8px] sm:hidden my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#828fa2"
                        className="cursor-pointer ml-[10px] sm:hidden my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Img
                  src="images/img_shoppingbag.svg"
                  className="h-[24px] sm:hidden md:ml-[0] ml-[132px] w-[24px]"
                  alt="shoppingbag"
                />
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] sm:hidden items-end justify-start md:ml-[0] ml-[24px] w-[24px]"
                  style={{ backgroundImage: "url('images/img_group2427.svg')" }}
                >
                  <div className="bg-red_600 h-[8px] mb-[14px] outline outline-[2px] outline-white_A700 rounded-[50%] w-[8px]"></div>
                </div>
                <Text
                  className="font-normal sm:hidden md:ml-[0] ml-[24px] not-italic text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-gray_500 text-[16px] font-inter">
                    Hello,
                  </span>
                  <span className="text-bluegray_900 text-[16px] font-inter">
                    {" "}
                  </span>
                  <span className="text-bluegray_900 text-[16px] font-inter font-medium">
                    Sam
                  </span>
                </Text>
                <Img
                  src="images/img_sherlocktoyfacelow.webp"
                  className="h-[40px] md:h-[auto] sm:hidden md:ml-[0] ml-[13px] rounded-[50%] w-[40px]"
                  alt="SherlockToyFacelow"
                />
              </div>
            </header>
            <div className="bg-gray_51 flex items-center justify-end p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[35px] items-center justify-start mb-[9px] mt-[14px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Checkout
                  </Text>
                  <Text
                    className="font-inter font-normal sm:mt-[0] mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> </span>
                    <span className="text-bluegray_400 text-[16px]">
                      Product detail/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Checkout
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[67%]">
                    <div className="flex flex-col items-start justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-end pr-[4px] py-[4px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold mt-[2px] text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Shipping information
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fill form below
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[36px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Name
                        </Text>
                        <Input
                          className="font-normal not-italic pb-[16px] pl-[20px] pr-[12px] pt-[21px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          type="text"
                          name="Group2340"
                          placeholder="Enter your name"
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between mt-[27px] w-[100%]">
                        <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[49%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Email address
                          </Text>
                          <Input
                            className="font-normal not-italic pb-[16px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[21px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                            type="email"
                            name="group One"
                            placeholder="Enter your email"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[49%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Phone number
                          </Text>
                          <Input
                            className="font-normal not-italic pb-[16px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[21px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                            type="number"
                            name="group Two"
                            placeholder="Enter your phone number"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[28px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Your address
                        </Text>
                        <TextArea
                          className="bg-white_A700 border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[20px] rounded-[4px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="group Three"
                          placeholder="Enter full address"
                        ></TextArea>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start mt-[29px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Country
                        </Text>
                        <SelectBox
                          className="bg-white_A700 border-[1px] border-indigo_51 border-solid font-semibold pl-[20px] py-[19px] rounded-[4px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="country One"
                          placeholder="Vietnam"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[6px] mr-[24px] w-[11px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start mt-[27px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Note
                        </Text>
                        <TextArea
                          className="bg-white_A700 border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[21px] rounded-[4px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="group Four"
                          placeholder="Write somethhing for us..."
                        ></TextArea>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[33%]">
                    <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[118px] md:h-[auto] object-cover w-[auto]"
                            alt="Rectangle"
                          />
                          <div className="flex flex-col gap-[41px] items-start justify-start w-[auto]">
                            <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-bold mt-[4px] text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Polo Shirt
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Color: Grey, S
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[100%]">
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
                        <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                        <Input
                          className="font-normal not-italic pl-[20px] sm:pr-[20px] pr-[35px] py-[20px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid mt-[31px] rounded-[8px] w-[100%]"
                          name="group Five"
                          placeholder="Enter reffered code"
                        ></Input>
                        <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                        <div className="flex flex-col gap-[20px] items-center justify-start mt-[35px] w-[100%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Price
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $120.0
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between pl-[3px] pt-[3px] w-[100%]">
                            <Text
                              className="font-normal mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Shipping fee
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $10.0
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                        <div className="flex flex-row items-start justify-between mt-[31px] w-[100%]">
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
                            $130.0
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start mt-[32px] w-[100%]">
                          <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[306px] py-[17px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                            Purchase now
                          </Button>
                          <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[306px] py-[17px] rounded-[24px] text-[14px] text-bluegray_800 text-center w-[auto]">
                            Scan QR code
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[22.00px] mt-[32px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[98%]"
                          as="h6"
                          variant="h6"
                        >
                          By clicking “Purchase” button, I agree with RiriBa
                          Term and Policy
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[16px] items-end justify-center md:w-[100%] w-[57%]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowleft"
                      />
                      <Text
                        className="font-medium mt-[5px] text-indigo_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Back to shopping cart
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingInfoPage;
