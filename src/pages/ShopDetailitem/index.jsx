import React from "react";

import { Img, Text, Line, Input, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const ShopDetailitemPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[29px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[7px] w-[auto]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[1448px] md:w-[100%] w-[87%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_icon_12.svg"
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
          <Line className="bg-indigo_51 h-[1979px] md:h-[1px] md:w-[100%] w-[1px]" />
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
                  wrapClassName="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex md:ml-[0] md:w-[100%] ml-[227px] pl-[16px] pr-[22px] py-[13px] rounded-[4px] sm:hidden sm:pr-[20px] sm:w-[100%] w-[38%]"
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
              <div className="flex flex-col items-center justify-start mb-[9px] mt-[16px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Shopping centre
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Product detail
                    </span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-center justify-start mt-[32px] p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[52px] items-center justify-start mb-[37px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[61%]">
                        <List
                          className="flex-col grid w-[auto]"
                          orientation="vertical"
                        >
                          <Img
                            src="defaultNoData.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle"
                          />
                          <Img
                            src="defaultNoData.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle One"
                          />
                          <Img
                            src="defaultNoData.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle Two"
                          />
                          <Img
                            src="defaultNoData.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle Three"
                          />
                        </List>
                        <Img
                          src="defaultNoData.png"
                          className="h-[564px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                          alt="Rectangle Four"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[36%]">
                        <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[53%]">
                          <Text
                            className="text-bluegray_900 text-left w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Polo Shirt
                          </Text>
                          <div className="flex flex-row gap-[18px] items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Code: #1230
                            </Text>
                            <Img
                              src="defaultNoData.png"
                              className="h-[14px] md:h-[auto] object-cover w-[auto]"
                              alt="Frame"
                            />
                          </div>
                        </div>
                        <Text
                          className="mt-[35px] text-indigo_400 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $120.0
                        </Text>
                        <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] pr-[4px] pt-[4px] md:w-[100%] w-[28%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose color
                          </Text>
                          <Img
                            src="images/img_frame_24X52.svg"
                            className="h-[24px] w-[auto]"
                            alt="Frame One"
                          />
                        </div>
                        <div className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] pr-[5px] pt-[5px] md:w-[100%] w-[35%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose quantity
                          </Text>
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[87%]">
                            <div className="border-[1px] border-indigo_51 border-solid flex h-[32px] items-center justify-start p-[9px] w-[32px]">
                              <div className="bg-bluegray_900 h-[1px] my-[5px] rounded-[1px] w-[93%]"></div>
                            </div>
                            <Text
                              className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              1
                            </Text>
                            <div className="border-[1px] border-indigo_51 border-solid md:h-[13px] h-[32px] ml-[21px] p-[9px] relative w-[32px]">
                              <Img
                                src="images/img_vector.svg"
                                className="absolute h-[13px] inset-[0] justify-center m-[auto] w-[13px]"
                                alt="Vector One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[39%]">
                          <Text
                            className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose size
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start mt-[19px] md:w-[100%] w-[75%]">
                            <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] py-[8px] text-[14px] text-bluegray_800 text-center w-[32px]">
                              S
                            </Button>
                            <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] py-[9px] text-[14px] text-bluegray_800 text-center w-[32px]">
                              M
                            </Button>
                            <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] py-[9px] text-[14px] text-bluegray_800 text-center w-[32px]">
                              L
                            </Button>
                          </div>
                          <Text
                            className="font-normal md:ml-[0] ml-[2px] mt-[21px] not-italic text-indigo_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            How to find your size?
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between md:ml-[0] ml-[3px] mt-[32px] w-[100%]">
                          <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[186px] py-[17px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                            Purchase now
                          </Button>
                          <Button className="bg-deep_orange_50 cursor-pointer font-bold min-w-[185px] py-[17px] rounded-[24px] text-[14px] text-center text-deep_orange_300 w-[auto]">
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[15%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <div className="bg-indigo_400 h-[2px] my-[6px] w-[26%]"></div>
                          <Text
                            className="font-medium text-indigo_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product Detail
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Reviews
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[54%]">
                        <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            PRODUCT DETAIL
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] not-italic text-bluegray_800 text-left w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            We use the Join Life label on clothing that is
                            produced using technology and raw materials that
                            help us to reduce the environmental impact of our
                            products.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            SPECIFICATION
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] not-italic text-bluegray_800 text-left"
                            as="h5"
                            variant="h5"
                          >
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Size:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              S<br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Material:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              Cotton
                              <br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Weight:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              1kg
                              <br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Original:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              Vietnam
                              <br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Category:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              T-Shirt
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-poppins md:gap-[40px] items-start justify-between mt-[36px] w-[100%]">
                  <Text
                    className="mt-[4px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Related product
                  </Text>
                  <div className="flex flex-row font-inter gap-[16px] items-center justify-between mb-[4px] w-[8%]">
                    <Text
                      className="font-medium text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See all
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_400_24X24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-inter gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[32px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_zap.svg"
                              className="ml-[11px] text-center"
                              alt="zap"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_tag.svg"
                              className="ml-[13px] text-center"
                              alt="tag"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Avo T-Shirt
                            </Text>
                            <div className="flex flex-row items-start justify-evenly w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Frame Two"
                          />
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Button className="bg-deep_orange_300 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary"
                            />
                          </Button>
                          <Button className="bg-gray_51 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary_10.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary One"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611 One"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_zap.svg"
                              className="ml-[11px] text-center"
                              alt="zap"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_tag.svg"
                              className="ml-[13px] text-center"
                              alt="tag"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Basic T-Shirt
                            </Text>
                            <div className="flex flex-row items-start justify-evenly w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Frame Three"
                          />
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Button className="bg-deep_orange_300 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary One"
                            />
                          </Button>
                          <Button className="bg-gray_51 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary_10.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary One One"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[37px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611 Two"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_zap.svg"
                              className="ml-[11px] text-center"
                              alt="zap"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_tag.svg"
                              className="ml-[13px] text-center"
                              alt="tag"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Trendy Polo
                            </Text>
                            <div className="flex flex-row items-start justify-evenly w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Frame Four"
                          />
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Button className="bg-deep_orange_300 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary Two"
                            />
                          </Button>
                          <Button className="bg-gray_51 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary_10.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary One Two"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611 Three"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_zap.svg"
                              className="ml-[11px] text-center"
                              alt="zap"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 flex items-center justify-center pl-[16px] pr-[8px] py-[9px] rounded-[4px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_tag.svg"
                              className="ml-[13px] text-center"
                              alt="tag"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                            <Text
                              className="font-medium md:ml-[0] ml-[14px] text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Over Shirt
                            </Text>
                            <div className="flex flex-row items-start justify-evenly w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Frame Five"
                          />
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Button className="bg-deep_orange_300 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary Three"
                            />
                          </Button>
                          <Button className="bg-gray_51 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary_10.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary One Three"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailitemPage;
