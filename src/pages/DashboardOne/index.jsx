import React from "react";

import { Img, Text, Line, Input, Button, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";

const DashboardOnePage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[644px] md:w-[100%] w-[87%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_icon_3.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
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
                    src="images/img_icon_8.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="Icon Five"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
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
          <Line className="bg-indigo_51 h-[1175px] md:h-[1px] md:w-[100%] w-[1px]" />
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
            <div className="bg-gray_51 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Overview
                  </Text>
                  <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[17%]">
                    <Button className="bg-white_A700 flex items-center justify-center p-[13px] rounded-[4px] w-[auto]">
                      <Img
                        src="images/img_buttonprimary.svg"
                        className="h-[20px]"
                        alt="ButtonPrimary"
                      />
                    </Button>
                    <SelectBox
                      className="bg-white_A700 font-medium pl-[16px] py-[16px] rounded-[4px] text-[14px] text-bluegray_800 text-left w-[auto]"
                      placeholderClassName="text-bluegray_800"
                      name="dropdown"
                      placeholder="Last week"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[20px] mr-[16px] w-[20px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between mt-[24px] w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[33%]">
                    <div className="flex flex-row items-center justify-between mb-[4px] md:w-[100%] w-[87%]">
                      <Img
                        src="images/img_group_26X70.svg"
                        className="h-[26px] w-[auto]"
                        alt="Group One"
                      />
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex relative w-[100%]">
                            <Text
                              className="my-[auto] text-bluegray_800 text-left w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              $10.000
                            </Text>
                            <div className="bg-green_700_63 flex flex-row items-start justify-center ml-[-1px] mt-[7px] pr-[3px] rounded-[4px] w-[32%] z-[1]">
                              <Img
                                src="images/img_line.svg"
                                className="h-[16px] mt-[3px] w-[16px]"
                                alt="line One"
                              />
                              <Text
                                className="font-semibold text-green_700 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                0.2%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[6px] items-center justify-start mt-[3px] md:w-[100%] w-[59%]">
                            <div className="bg-indigo_401 h-[6px] my-[3px] rounded-[50%] w-[6px]"></div>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total income
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[20px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[67%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex items-center justify-start sm:ml-[0] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group_1.svg"
                          className="h-[26px] w-[auto]"
                          alt="Group Two"
                        />
                        <div className="flex flex-row items-start justify-start w-[auto]">
                          <div className="flex items-center justify-start w-[70%]">
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="flex flex-row items-start justify-evenly md:w-[100%] w-[96%]">
                                <div className="bg-indigo_401 h-[6px] mb-[8px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Total Expenses
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-red_600_63 flex flex-row items-start justify-center mb-[34px] mt-[7px] pr-[3px] rounded-[4px] w-[32%]">
                            <Img
                              src="images/img_line_16X16.svg"
                              className="h-[16px] mt-[3px] w-[16px]"
                              alt="line Two"
                            />
                            <Text
                              className="font-semibold text-left text-red_600 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              0.2%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start sm:ml-[0] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between mb-[4px] md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group_26X70.svg"
                          className="h-[26px] w-[auto]"
                          alt="Group Three"
                        />
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex relative w-[100%]">
                              <Text
                                className="my-[auto] text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center ml-[-1px] mt-[7px] pr-[3px] rounded-[4px] w-[32%] z-[1]">
                                <Img
                                  src="images/img_line.svg"
                                  className="h-[16px] mt-[3px] w-[16px]"
                                  alt="line Three"
                                />
                                <Text
                                  className="font-semibold text-green_700 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-start mt-[4px] md:w-[100%] w-[64%]">
                              <div className="bg-indigo_401 h-[6px] my-[4px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total Revenue
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[19px] items-center justify-between mt-[20px] w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[67%]">
                    <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Statistics
                        </Text>
                        <Button
                          className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-center justify-center px-[16px] py-[11px] rounded-[4px] shadow-bs text-center"
                          leftIcon={
                            <Img
                              src="images/img_calendar.svg"
                              className="mr-[10px] text-center"
                              alt="calendar"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_800 text-left">
                            13 Aug - 20 Aug
                          </div>
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-[44px] items-start justify-between mb-[14px] md:w-[100%] w-[99%]">
                        <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[11%]">
                          <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] w-[82%]">
                            <div className="bg-indigo_400 h-[6px] mb-[2px] mt-[5px] rounded-[50%] w-[6px]"></div>
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Income
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                            <div className="bg-amber_300 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Expenses
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-start md:w-[100%] w-[84%]">
                          <div className="flex flex-col gap-[15px] items-end justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                              <div className="flex sm:flex-1 flex-col items-end justify-start sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  1,400
                                </Text>
                                <Text
                                  className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  1,200
                                </Text>
                                <Text
                                  className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  1,000
                                </Text>
                                <Text
                                  className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  800
                                </Text>
                                <Text
                                  className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  600
                                </Text>
                                <Text
                                  className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  400
                                </Text>
                                <Text
                                  className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  200
                                </Text>
                                <Text
                                  className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  0
                                </Text>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat font-poppins md:h-[206px] h-[227px] pt-[17px] px-[17px] relative sm:w-[100%] w-[91%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group2426.svg')",
                                }}
                              >
                                <Img
                                  src="images/img_frame_206X450.svg"
                                  className="absolute bottom-[0] h-[206px] inset-x-[0] mx-[auto] w-[auto]"
                                  alt="Frame"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat md:h-[41px] h-[84px] left-[7%] p-[13px] shadow-bs2 top-[19%] w-[30%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group_white_A700.svg')",
                                  }}
                                >
                                  <div className="absolute flex flex-row gap-[8px] items-start justify-center left-[15%] top-[21%] w-[32%]">
                                    <div className="bg-indigo_400 h-[6px] mb-[5px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                    <Text
                                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      200.0
                                    </Text>
                                  </div>
                                  <div className="absolute flex items-center justify-start left-[15%] top-[23%] w-[75%]">
                                    <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-start justify-end ml-[auto] md:w-[100%] w-[43%]">
                                        <div className="bg-amber_300 h-[6px] mb-[4px] rounded-[50%] w-[6px]"></div>
                                        <Text
                                          className="font-semibold text-bluegray_900 text-left w-[auto]"
                                          variant="body1"
                                        >
                                          2,000
                                        </Text>
                                      </div>
                                      <Text
                                        className="mr-[19px] text-bluegray_400 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        21 September, 2021
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end ml-[auto] pb-[2px] px-[2px] md:w-[100%] w-[91%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Mon
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[46px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Tue
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[52px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Wed
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[46px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Thu
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[55px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Fri
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[55px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Sat
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[51px] mr-[33px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[211px] h-[410px] relative md:w-[100%] w-[33%]">
                    <div className="absolute md:h-[100px] h-[116px] inset-x-[0] mx-[auto] top-[23%] w-[100%]">
                      <Img
                        src="images/img_ellipse.svg"
                        className="absolute h-[46px] right-[0] top-[0] w-[auto]"
                        alt="Ellipse One"
                      />
                      <Img
                        src="images/img_vector_white_A700.svg"
                        className="absolute bottom-[0] h-[100px] inset-x-[0] mx-[auto] w-[auto]"
                        alt="Vector One"
                      />
                    </div>
                    <div className="absolute bg-deep_orange_300 flex inset-x-[0] items-center justify-end mx-[auto] p-[11px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] shadow-bs top-[0] w-[100%]">
                      <div className="md:h-[115px] h-[188px] relative w-[75%]">
                        <div className="md:h-[115px] h-[188px] m-[auto] w-[100%]">
                          <div className="md:h-[115px] h-[188px] m-[auto] w-[100%]">
                            <div className="absolute bottom-[0] md:h-[115px] h-[163px] inset-x-[0] mx-[auto] w-[100%]">
                              <div className="absolute h-[61px] left-[0] top-[17%] w-[61px]">
                                <Img
                                  src="images/img_sphere.webp"
                                  className="h-[61px] m-[auto] object-cover w-[61px]"
                                  alt="sphere"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[61px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group2344.webp')",
                                  }}
                                >
                                  <div className="h-[61px] relative w-[61px]">
                                    <Img
                                      src="images/img_image2.webp"
                                      className="h-[61px] m-[auto] object-cover w-[61px]"
                                      alt="imageTwo"
                                    />
                                    <div className="absolute h-[61px] inset-[0] justify-center m-[auto] w-[61px]">
                                      <Img
                                        src="images/img_image2.webp"
                                        className="h-[61px] m-[auto] object-cover w-[61px]"
                                        alt="imageThree"
                                      />
                                      <Img
                                        src="images/img_image2.webp"
                                        className="absolute h-[61px] inset-[0] justify-center m-[auto] object-cover w-[61px]"
                                        alt="imageFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute md:h-[115px] h-[163px] inset-y-[0] my-[auto] right-[0] w-[83%]">
                                <div className="md:h-[115px] h-[163px] m-[auto] w-[100%]">
                                  <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[97%]">
                                    <div className="h-[112px] relative w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[112px] m-[auto] object-cover w-[100%]"
                                        alt="Two Three"
                                      />
                                      <div className="absolute h-[112px] inset-[0] justify-center m-[auto] w-[100%]">
                                        <div className="h-[112px] m-[auto] w-[100%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[112px] m-[auto] object-cover w-[100%]"
                                            alt="One"
                                          />
                                          <div className="absolute bottom-[3%] h-[24px] right-[6%] w-[30%]">
                                            <div className="md:h-[10px] h-[19px] mb-[-9.76px] ml-[11px] mt-[auto] w-[41%] z-[1]">
                                              <Img
                                                src="defaultNoData.png"
                                                className="h-[19px] m-[auto] object-cover w-[100%]"
                                                alt="One One"
                                              />
                                              <Img
                                                src="defaultNoData.png"
                                                className="absolute h-[19px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                                                alt="color"
                                              />
                                            </div>
                                            <div className="h-[23px] md:h-[NaNpx] mb-[undefinedpx] ml-[auto] mr-[4px] w-[76%] z-[1]">
                                              <Img
                                                src="defaultNoData.png"
                                                className="h-[23px] m-[auto] object-cover w-[100%]"
                                                alt="Two Four"
                                              />
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/defaultNoData.png')",
                                                }}
                                              >
                                                <div className="h-[23px] relative w-[100%]">
                                                  <Img
                                                    src="defaultNoData.png"
                                                    className="h-[23px] m-[auto] object-cover w-[100%]"
                                                    alt="specular"
                                                  />
                                                  <div className="absolute h-[23px] inset-[0] justify-center m-[auto] w-[100%]">
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="h-[23px] m-[auto] object-cover w-[100%]"
                                                      alt="specular One"
                                                    />
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="absolute h-[23px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                      alt="specular Two"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <Img
                                              src="defaultNoData.png"
                                              className="h-[11px] mb-[undefinedpx] mt-[auto] mx-[auto] object-cover w-[100%] z-[1]"
                                              alt="shadow"
                                            />
                                          </div>
                                        </div>
                                        <div className="absolute h-[88px] left-[29%] top-[0] w-[18%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[88px] m-[auto] object-cover w-[100%]"
                                            alt="stand"
                                          />
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/defaultNoData.png')",
                                            }}
                                          >
                                            <div className="h-[88px] relative w-[100%]">
                                              <Img
                                                src="defaultNoData.png"
                                                className="h-[88px] m-[auto] object-cover w-[100%]"
                                                alt="specular Three"
                                              />
                                              <div className="absolute h-[88px] inset-[0] justify-center m-[auto] w-[100%]">
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="h-[88px] m-[auto] object-cover w-[100%]"
                                                  alt="specular Four"
                                                />
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="absolute h-[88px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                  alt="specular Five"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bottom-[2%] h-[11px] left-[12%] w-[52%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="absolute h-[11px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                            alt="shadow One"
                                          />
                                          <div className="absolute h-[10px] inset-x-[0] mx-[auto] top-[0] w-[89%]">
                                            <Img
                                              src="defaultNoData.png"
                                              className="h-[10px] m-[auto] object-cover w-[100%]"
                                              alt="Keyboard"
                                            />
                                            <div
                                              className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group2353.svg')",
                                              }}
                                            >
                                              <div className="h-[10px] relative w-[100%]">
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="h-[10px] m-[auto] object-cover w-[100%]"
                                                  alt="specular Six"
                                                />
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="absolute h-[10px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                  alt="specular Seven"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[115px] left-[0] top-[0] w-[81%]">
                                    <Img
                                      src="defaultNoData.png"
                                      className="h-[115px] m-[auto] object-cover w-[100%]"
                                      alt="Screen"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/defaultNoData.png')",
                                      }}
                                    >
                                      <div className="h-[115px] relative w-[100%]">
                                        <Img
                                          src="defaultNoData.png"
                                          className="h-[115px] m-[auto] object-cover w-[100%]"
                                          alt="specular Eight"
                                        />
                                        <div className="absolute h-[115px] inset-[0] justify-center m-[auto] w-[100%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[115px] m-[auto] object-cover w-[100%]"
                                            alt="specular Nine"
                                          />
                                          <Img
                                            src="defaultNoData.png"
                                            className="absolute h-[115px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                            alt="specular Ten"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="defaultNoData.png"
                                  className="absolute h-[114px] left-[0] object-cover top-[2%] w-[81%]"
                                  alt="SceneShadow"
                                />
                              </div>
                            </div>
                            <div className="absolute flex inset-x-[0] mx-[auto] sm:pl-[20px] pl-[29px] pt-[29px] top-[0] w-[87%]">
                              <div className="h-[105px] mt-[auto] mx-[auto] w-[74%]">
                                <div className="flex h-[100%] items-center justify-start m-[auto] w-[99%]">
                                  <div className="h-[105px] relative w-[100%]">
                                    <Img
                                      src="defaultNoData.png"
                                      className="h-[105px] m-[auto] object-cover w-[100%]"
                                      alt="base"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/defaultNoData.png')",
                                      }}
                                    >
                                      <div className="h-[105px] relative w-[100%]">
                                        <div className="h-[105px] m-[auto] w-[100%]">
                                          <div className="h-[105px] m-[auto] w-[100%]">
                                            <Img
                                              src="defaultNoData.png"
                                              className="h-[105px] m-[auto] object-cover w-[100%]"
                                              alt="specular Eleven"
                                            />
                                            <div className="absolute md:h-[16px] h-[25px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                              <div className="h-[25px] m-[auto] w-[100%]">
                                                <div className="h-[10px] md:h-[9px] mb-[-1.26px] mx-[auto] w-[100%] z-[1]">
                                                  <Img
                                                    src="defaultNoData.png"
                                                    className="h-[10px] m-[auto] object-cover w-[100%]"
                                                    alt="statusbar"
                                                  />
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat h-[10px] inset-[0] justify-center m-[auto] w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/defaultNoData.png')",
                                                    }}
                                                  >
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="absolute h-[10px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                      alt="specular Twelve"
                                                    />
                                                  </div>
                                                </div>
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="h-[16px] mt-[auto] mx-[auto] object-cover w-[100%]"
                                                  alt="shadow Two"
                                                />
                                              </div>
                                              <div className="absolute h-[13px] left-[3%] top-[12%] w-[18%]">
                                                <div className="absolute h-[13px] inset-y-[0] left-[0] my-[auto] w-[83%]">
                                                  <div className="absolute h-[13px] inset-y-[0] left-[0] my-[auto] w-[74%]">
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="absolute h-[13px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                      alt="shadow Three"
                                                    />
                                                    <div className="absolute h-[4px] left-[0] top-[0] w-[4px]">
                                                      <Img
                                                        src="defaultNoData.png"
                                                        className="h-[4px] m-[auto] object-cover w-[4px]"
                                                        alt="dot"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex h-[3px] items-center justify-start left-[0] top-[0] w-[3px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/defaultNoData.png')",
                                                        }}
                                                      >
                                                        <div className="h-[3px] relative w-[3px]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[3px] m-[auto] object-cover w-[3px]"
                                                            alt="specular Thirteen"
                                                          />
                                                          <div className="absolute h-[3px] inset-[0] justify-center m-[auto] w-[3px]">
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="h-[3px] m-[auto] object-cover w-[3px]"
                                                              alt="specular Fourteen"
                                                            />
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="absolute h-[3px] inset-[0] justify-center m-[auto] object-cover w-[3px]"
                                                              alt="specular Fifteen"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="absolute h-[13px] inset-y-[0] my-[auto] right-[0] w-[74%]">
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="absolute h-[13px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                      alt="shadow Four"
                                                    />
                                                    <div className="absolute h-[4px] left-[0] top-[0] w-[4px]">
                                                      <Img
                                                        src="defaultNoData.png"
                                                        className="h-[4px] m-[auto] object-cover w-[4px]"
                                                        alt="dot One"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex h-[3px] items-center justify-start left-[0] top-[0] w-[3px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/defaultNoData.png')",
                                                        }}
                                                      >
                                                        <div className="h-[3px] relative w-[3px]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[3px] m-[auto] object-cover w-[3px]"
                                                            alt="specular Sixteen"
                                                          />
                                                          <div className="absolute h-[3px] inset-[0] justify-center m-[auto] w-[3px]">
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="h-[3px] m-[auto] object-cover w-[3px]"
                                                              alt="specular Seventeen"
                                                            />
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="absolute h-[3px] inset-[0] justify-center m-[auto] object-cover w-[3px]"
                                                              alt="specular Eighteen"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="absolute h-[13px] inset-y-[0] my-[auto] right-[0] w-[61%]">
                                                  <Img
                                                    src="defaultNoData.png"
                                                    className="absolute h-[13px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                    alt="shadow Five"
                                                  />
                                                  <div className="absolute h-[4px] left-[0] top-[0] w-[4px]">
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="h-[4px] m-[auto] object-cover w-[4px]"
                                                      alt="dot Two"
                                                    />
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat flex h-[3px] items-center justify-start left-[0] top-[0] w-[3px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/defaultNoData.png')",
                                                      }}
                                                    >
                                                      <div className="h-[3px] relative w-[3px]">
                                                        <Img
                                                          src="defaultNoData.png"
                                                          className="h-[3px] m-[auto] object-cover w-[3px]"
                                                          alt="specular Nineteen"
                                                        />
                                                        <div className="absolute h-[3px] inset-[0] justify-center m-[auto] w-[3px]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[3px] m-[auto] object-cover w-[3px]"
                                                            alt="specular Twenty"
                                                          />
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="absolute h-[3px] inset-[0] justify-center m-[auto] object-cover w-[3px]"
                                                            alt="specular TwentyOne"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[13%] w-[95%]">
                                            <div className="h-[18px] relative w-[100%]">
                                              <div className="h-[18px] m-[auto] w-[100%]">
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="absolute h-[18px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                  alt="shadow Six"
                                                />
                                                <div className="absolute h-[10px] inset-x-[0] mx-[auto] top-[0] w-[98%]">
                                                  <Img
                                                    src="defaultNoData.png"
                                                    className="h-[10px] m-[auto] object-cover w-[100%]"
                                                    alt="search"
                                                  />
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/defaultNoData.png')",
                                                    }}
                                                  >
                                                    <div className="h-[10px] relative w-[100%]">
                                                      <Img
                                                        src="defaultNoData.png"
                                                        className="h-[10px] m-[auto] object-cover w-[100%]"
                                                        alt="specular TwentyTwo"
                                                      />
                                                      <div className="absolute h-[6px] inset-y-[0] left-[3%] my-[auto] w-[6px]">
                                                        <Img
                                                          src="defaultNoData.png"
                                                          className="h-[6px] m-[auto] object-cover w-[6px]"
                                                          alt="shadow Seven"
                                                        />
                                                        <div className="absolute h-[6px] left-[0] top-[0] w-[5px]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[6px] m-[auto] object-cover w-[5px]"
                                                            alt="loupe"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat h-[6px] inset-[0] justify-center m-[auto] w-[5px]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/defaultNoData.png')",
                                                            }}
                                                          >
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="absolute h-[6px] inset-[0] justify-center m-[auto] object-cover w-[5px]"
                                                              alt="specular TwentyThree"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[11%] h-[11px] left-[7%] w-[19%]">
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="absolute h-[11px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                  alt="shadow Eight"
                                                />
                                                <div className="absolute h-[2px] left-[0] top-[0] w-[63%]">
                                                  <Img
                                                    src="defaultNoData.png"
                                                    className="h-[2px] m-[auto] object-cover w-[100%]"
                                                    alt="textXS"
                                                  />
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat h-[2px] inset-x-[0] mx-[auto] top-[0] w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/defaultNoData.png')",
                                                    }}
                                                  >
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="absolute h-[2px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                      alt="specular TwentyFour"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bottom-[0] h-[79px] md:h-[94px] inset-x-[0] mx-[auto] w-[96%]">
                                          <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[35%]">
                                            <div className="h-[30px] relative w-[100%]">
                                              <Img
                                                src="defaultNoData.png"
                                                className="h-[27px] m-[auto] object-cover w-[91%]"
                                                alt="shadow Nine"
                                              />
                                              <div className="absolute h-[30px] inset-[0] justify-center m-[auto] w-[100%]">
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="h-[30px] m-[auto] object-cover w-[100%]"
                                                  alt="bg"
                                                />
                                                <div
                                                  className="absolute bg-cover bg-no-repeat flex h-[max-content] inset-[0] items-end justify-center m-[auto] w-[88%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group2392.svg')",
                                                  }}
                                                >
                                                  <div className="flex flex-row items-start justify-evenly ml-[auto] mt-[5px] md:w-[100%] w-[88%]">
                                                    <div className="h-[14px] relative w-[14px]">
                                                      <Img
                                                        src="defaultNoData.png"
                                                        className="h-[14px] m-[auto] object-cover w-[14px]"
                                                        alt="shadow Ten"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex h-[13px] items-center justify-start left-[0] top-[0] w-[13px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group2393.svg')",
                                                        }}
                                                      >
                                                        <div className="h-[13px] relative w-[13px]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[13px] m-[auto] object-cover w-[13px]"
                                                            alt="specular TwentyFive"
                                                          />
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="absolute h-[13px] inset-[0] justify-center m-[auto] object-cover w-[13px]"
                                                            alt="specular TwentySix"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="h-[15px] mt-[3px] relative w-[64%]">
                                                      <div className="h-[10px] md:h-[5px] mb-[-4.97px] mx-[auto] w-[100%] z-[1]">
                                                        <Img
                                                          src="defaultNoData.png"
                                                          className="absolute h-[9px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                          alt="shadow Twelve"
                                                        />
                                                        <div className="absolute h-[2px] left-[0] top-[0] w-[62%]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[2px] m-[auto] object-cover w-[100%]"
                                                            alt="textXS Two"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat flex h-[2px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/defaultNoData.png')",
                                                            }}
                                                          >
                                                            <div className="h-[2px] relative w-[100%]">
                                                              <Img
                                                                src="defaultNoData.png"
                                                                className="h-[2px] m-[auto] object-cover w-[100%]"
                                                                alt="specular Thirty"
                                                              />
                                                              <div className="absolute h-[2px] inset-[0] justify-center m-[auto] w-[100%]">
                                                                <Img
                                                                  src="defaultNoData.png"
                                                                  className="h-[2px] m-[auto] object-cover w-[100%]"
                                                                  alt="specular ThirtyOne"
                                                                />
                                                                <Img
                                                                  src="defaultNoData.png"
                                                                  className="absolute h-[2px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                  alt="specular ThirtyTwo"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="h-[10px] md:h-[9px] mt-[auto] mx-[auto] w-[100%]">
                                                        <Img
                                                          src="defaultNoData.png"
                                                          className="absolute h-[9px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                          alt="shadow Eleven"
                                                        />
                                                        <div className="absolute h-[2px] left-[0] top-[0] w-[62%]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[2px] m-[auto] object-cover w-[100%]"
                                                            alt="textXS One"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat flex h-[2px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/defaultNoData.png')",
                                                            }}
                                                          >
                                                            <div className="h-[2px] relative w-[100%]">
                                                              <Img
                                                                src="defaultNoData.png"
                                                                className="h-[2px] m-[auto] object-cover w-[100%]"
                                                                alt="specular TwentySeven"
                                                              />
                                                              <div className="absolute h-[2px] inset-[0] justify-center m-[auto] w-[100%]">
                                                                <Img
                                                                  src="defaultNoData.png"
                                                                  className="h-[2px] m-[auto] object-cover w-[100%]"
                                                                  alt="specular TwentyEight"
                                                                />
                                                                <Img
                                                                  src="defaultNoData.png"
                                                                  className="absolute h-[2px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                  alt="specular TwentyNine"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="h-[44px] relative w-[91%]">
                                              <div className="md:h-[13px] h-[15px] mb-[-0.02px] mx-[auto] w-[100%] z-[1]">
                                                <div className="absolute h-[13px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                                  <Img
                                                    src="defaultNoData.png"
                                                    className="h-[13px] m-[auto] object-cover w-[100%]"
                                                    alt="shadow Fifteen"
                                                  />
                                                  <div className="absolute h-[11px] inset-x-[0] mx-[auto] top-[0] w-[96%]">
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="h-[11px] m-[auto] object-cover w-[100%]"
                                                      alt="bg Two"
                                                    />
                                                    <Img
                                                      src="images/img_eye_bluegray_900.svg"
                                                      className="absolute h-[3px] inset-y-[0] my-[auto] right-[9%] w-[auto]"
                                                      alt="Eye One"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="absolute bottom-[0] h-[10px] md:h-[9px] left-[6%] w-[54%]">
                                                  <Img
                                                    src="defaultNoData.png"
                                                    className="absolute h-[9px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                    alt="shadow Sixteen"
                                                  />
                                                  <div className="absolute h-[2px] left-[0] top-[0] w-[62%]">
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="h-[2px] m-[auto] object-cover w-[100%]"
                                                      alt="textXS Four"
                                                    />
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat h-[2px] inset-x-[0] mx-[auto] top-[0] w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/defaultNoData.png')",
                                                      }}
                                                    >
                                                      <Img
                                                        src="defaultNoData.png"
                                                        className="absolute h-[2px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                        alt="specular ThirtySix"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                                                <div className="flex flex-col items-center justify-start w-[100%]">
                                                  <Img
                                                    src="images/img_3.svg"
                                                    className="h-[11px] w-[auto]"
                                                    alt="Three"
                                                  />
                                                  <div className="h-[15px] mt-[2px] relative w-[100%]">
                                                    <div className="absolute h-[13px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                                      <Img
                                                        src="defaultNoData.png"
                                                        className="h-[13px] m-[auto] object-cover w-[100%]"
                                                        alt="shadow Thirteen"
                                                      />
                                                      <div className="absolute h-[11px] inset-x-[0] mx-[auto] top-[0] w-[96%]">
                                                        <Img
                                                          src="defaultNoData.png"
                                                          className="h-[11px] m-[auto] object-cover w-[100%]"
                                                          alt="bg One"
                                                        />
                                                        <div
                                                          className="absolute bg-cover bg-no-repeat h-[11px] md:h-[3px] inset-[0] justify-center m-[auto] p-[3px] w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group2382.svg')",
                                                          }}
                                                        >
                                                          <Img
                                                            src="images/img_eye.svg"
                                                            className="absolute bottom-[27%] h-[3px] right-[27%] w-[auto]"
                                                            alt="Eye"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="absolute bottom-[0] h-[10px] md:h-[9px] left-[8%] w-[54%]">
                                                      <Img
                                                        src="defaultNoData.png"
                                                        className="absolute h-[9px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                        alt="shadow Fourteen"
                                                      />
                                                      <div className="absolute h-[2px] left-[0] top-[0] w-[62%]">
                                                        <Img
                                                          src="defaultNoData.png"
                                                          className="h-[2px] m-[auto] object-cover w-[100%]"
                                                          alt="textXS Three"
                                                        />
                                                        <div
                                                          className="absolute bg-cover bg-no-repeat flex h-[2px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/defaultNoData.png')",
                                                          }}
                                                        >
                                                          <div className="h-[2px] relative w-[100%]">
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="h-[2px] m-[auto] object-cover w-[100%]"
                                                              alt="specular ThirtyThree"
                                                            />
                                                            <div className="absolute h-[2px] inset-[0] justify-center m-[auto] w-[100%]">
                                                              <Img
                                                                src="defaultNoData.png"
                                                                className="h-[2px] m-[auto] object-cover w-[100%]"
                                                                alt="specular ThirtyFour"
                                                              />
                                                              <Img
                                                                src="defaultNoData.png"
                                                                className="absolute h-[2px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                alt="specular ThirtyFive"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bottom-[0] flex items-center justify-end left-[0] w-[77%]">
                                            <div className="h-[94px] relative w-[100%]">
                                              <Img
                                                src="defaultNoData.png"
                                                className="absolute h-[94px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                alt="shadow Seventeen"
                                              />
                                              <div className="absolute h-[69px] left-[0] top-[0] w-[83%]">
                                                <Img
                                                  src="defaultNoData.png"
                                                  className="h-[69px] m-[auto] object-cover w-[100%]"
                                                  alt="2xblock"
                                                />
                                                <div
                                                  className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/defaultNoData.png')",
                                                  }}
                                                >
                                                  <div className="h-[69px] relative w-[100%]">
                                                    <Img
                                                      src="defaultNoData.png"
                                                      className="absolute h-[69px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                      alt="specular ThirtySeven"
                                                    />
                                                    <div className="absolute flex inset-[0] justify-center m-[auto] w-[72%]">
                                                      <div className="flex my-[auto] w-[86%]">
                                                        <div className="flex my-[auto] w-[84%]">
                                                          <div className="flex my-[auto] w-[80%]">
                                                            <div className="h-[36px] my-[auto] w-[78%]">
                                                              <div className="absolute bottom-[0] h-[28px] left-[0] w-[68%]">
                                                                <div className="absolute bottom-[0] h-[19px] left-[0] w-[53%]">
                                                                  <Img
                                                                    src="defaultNoData.png"
                                                                    className="h-[19px] m-[auto] object-cover w-[100%]"
                                                                    alt="shadow Eighteen"
                                                                  />
                                                                  <div className="absolute h-[13px] left-[0] top-[0] w-[46%]">
                                                                    <Img
                                                                      src="defaultNoData.png"
                                                                      className="h-[13px] m-[auto] object-cover w-[100%]"
                                                                      alt="One Two"
                                                                    />
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat h-[13px] inset-[0] justify-center m-[auto] w-[100%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/defaultNoData.png')",
                                                                      }}
                                                                    >
                                                                      <Img
                                                                        src="defaultNoData.png"
                                                                        className="absolute h-[13px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                        alt="specular ThirtyEight"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div className="absolute h-[28px] inset-y-[0] my-[auto] right-[0] w-[53%]">
                                                                  <Img
                                                                    src="defaultNoData.png"
                                                                    className="h-[28px] m-[auto] object-cover w-[100%]"
                                                                    alt="shadow Nineteen"
                                                                  />
                                                                  <div className="absolute h-[21px] left-[0] top-[0] w-[46%]">
                                                                    <Img
                                                                      src="defaultNoData.png"
                                                                      className="h-[21px] m-[auto] object-cover w-[100%]"
                                                                      alt="Two Five"
                                                                    />
                                                                    <div className="absolute h-[21px] inset-[0] justify-center m-[auto] w-[100%]">
                                                                      <Line className="h-[21px] m-[auto] w-[5px]" />
                                                                      <Img
                                                                        src="defaultNoData.png"
                                                                        className="absolute h-[21px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                        alt="specular ThirtyNine"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="absolute h-[36px] inset-y-[0] my-[auto] right-[0] w-[36%]">
                                                                <Img
                                                                  src="defaultNoData.png"
                                                                  className="h-[36px] m-[auto] object-cover w-[100%]"
                                                                  alt="shadow Twenty"
                                                                />
                                                                <div className="absolute h-[30px] left-[0] top-[0] w-[46%]">
                                                                  <Img
                                                                    src="defaultNoData.png"
                                                                    className="h-[30px] m-[auto] object-cover w-[100%]"
                                                                    alt="Three One"
                                                                  />
                                                                  <div className="absolute h-[30px] inset-[0] justify-center m-[auto] w-[100%]">
                                                                    <Line className="h-[30px] m-[auto] w-[5px]" />
                                                                    <Img
                                                                      src="defaultNoData.png"
                                                                      className="absolute h-[30px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                      alt="specular Forty"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="h-[19px] ml-[-2.21px] mt-[auto] w-[28%] z-[1]">
                                                              <Img
                                                                src="defaultNoData.png"
                                                                className="h-[19px] m-[auto] object-cover w-[100%]"
                                                                alt="shadow TwentyOne"
                                                              />
                                                              <div className="absolute h-[13px] left-[0] top-[0] w-[46%]">
                                                                <Img
                                                                  src="defaultNoData.png"
                                                                  className="h-[13px] m-[auto] object-cover w-[100%]"
                                                                  alt="Four"
                                                                />
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat h-[13px] inset-[0] justify-center m-[auto] w-[100%]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/defaultNoData.png')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    src="defaultNoData.png"
                                                                    className="absolute h-[13px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                    alt="specular FortyOne"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="h-[28px] ml-[-2.21px] mt-[auto] w-[22%] z-[1]">
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="h-[28px] m-[auto] object-cover w-[100%]"
                                                              alt="shadow TwentyTwo"
                                                            />
                                                            <div className="absolute h-[21px] left-[0] top-[0] w-[46%]">
                                                              <Img
                                                                src="defaultNoData.png"
                                                                className="h-[21px] m-[auto] object-cover w-[100%]"
                                                                alt="Five"
                                                              />
                                                              <div className="absolute h-[21px] inset-[0] justify-center m-[auto] w-[100%]">
                                                                <Line className="h-[21px] m-[auto] w-[5px]" />
                                                                <Img
                                                                  src="defaultNoData.png"
                                                                  className="absolute h-[21px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                  alt="specular FortyTwo"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="h-[28px] ml-[-2.2px] mt-[auto] w-[19%] z-[1]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[28px] m-[auto] object-cover w-[100%]"
                                                            alt="shadow TwentyThree"
                                                          />
                                                          <div className="absolute h-[21px] left-[0] top-[0] w-[46%]">
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="h-[21px] m-[auto] object-cover w-[100%]"
                                                              alt="Six"
                                                            />
                                                            <div className="absolute h-[21px] inset-[0] justify-center m-[auto] w-[100%]">
                                                              <Line className="h-[21px] m-[auto] w-[5px]" />
                                                              <Img
                                                                src="defaultNoData.png"
                                                                className="absolute h-[21px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                                alt="specular FortyThree"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="h-[36px] ml-[-2.12px] my-[auto] w-[16%] z-[1]">
                                                        <Img
                                                          src="defaultNoData.png"
                                                          className="h-[36px] m-[auto] object-cover w-[100%]"
                                                          alt="shadow TwentyFour"
                                                        />
                                                        <div className="absolute h-[30px] left-[0] top-[0] w-[46%]">
                                                          <Img
                                                            src="defaultNoData.png"
                                                            className="h-[30px] m-[auto] object-cover w-[100%]"
                                                            alt="Seven"
                                                          />
                                                          <div className="absolute h-[30px] inset-[0] justify-center m-[auto] w-[100%]">
                                                            <Line className="h-[30px] m-[auto] w-[5px]" />
                                                            <Img
                                                              src="defaultNoData.png"
                                                              className="absolute h-[30px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                                              alt="specular FortyFour"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <Img
                                                      src="images/img_group2382.svg"
                                                      className="absolute h-[65px] inset-[0] justify-center m-[auto] w-[auto]"
                                                      alt="fill"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute h-[105px] inset-[0] justify-center m-[auto] w-[100%]">
                                  <Img
                                    src="defaultNoData.png"
                                    className="absolute h-[105px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                                    alt="Dropshadowshere"
                                  />
                                  <div className="absolute bottom-[22%] md:h-[11px] h-[14px] right-[0] w-[29%]">
                                    <div className="absolute h-[11px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[11px] m-[auto] object-cover w-[100%]"
                                        alt="bg Three"
                                      />
                                      <Img
                                        src="images/img_group_gray_101.svg"
                                        className="absolute h-[3px] inset-y-[0] my-[auto] right-[9%] w-[auto]"
                                        alt="Group Four"
                                      />
                                    </div>
                                    <div className="absolute bottom-[0] h-[10px] md:h-[9px] left-[6%] w-[56%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="absolute h-[9px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                        alt="shadow TwentyFive"
                                      />
                                      <div className="absolute h-[2px] left-[0] top-[0] w-[58%]">
                                        <Img
                                          src="defaultNoData.png"
                                          className="h-[2px] m-[auto] object-cover w-[100%]"
                                          alt="textXS Five"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat h-[2px] inset-[0] justify-center m-[auto] w-[100%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/defaultNoData.png')",
                                          }}
                                        >
                                          <Img
                                            src="defaultNoData.png"
                                            className="absolute h-[2px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                            alt="specular FortyFive"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[47px] md:h-[63px] mb-[16px] ml-[-15.43px] mt-[auto] rotate-[180deg] w-[20%] z-[1]">
                                <Img
                                  src="defaultNoData.png"
                                  className="h-[47px] m-[auto] object-cover w-[100%]"
                                  alt="cursor"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat h-[47px] inset-[0] justify-center m-[auto] w-[100%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/defaultNoData.png')",
                                  }}
                                >
                                  <Img
                                    src="defaultNoData.png"
                                    className="absolute h-[47px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                    alt="specular FortySix"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="defaultNoData.png"
                            className="absolute h-[115px] inset-x-[0] mx-[auto] object-cover top-[13%] w-[auto]"
                            alt="Sphereshadow"
                          />
                        </div>
                        <div className="absolute h-[33px] right-[23%] top-[4%] w-[32px]">
                          <Img
                            src="images/img_sphere.webp"
                            className="h-[33px] m-[auto] object-cover w-[32px]"
                            alt="sphere One"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[32px]"
                            style={{
                              backgroundImage:
                                "url('images/defaultNoData.png')",
                            }}
                          >
                            <div className="h-[33px] relative w-[32px]">
                              <Img
                                src="images/img_image2.webp"
                                className="h-[33px] m-[auto] object-cover w-[32px]"
                                alt="imageTwo One"
                              />
                              <div className="absolute h-[33px] inset-[0] justify-center m-[auto] w-[32px]">
                                <Img
                                  src="images/img_image2.webp"
                                  className="h-[33px] m-[auto] object-cover w-[32px]"
                                  alt="imageThree One"
                                />
                                <Img
                                  src="images/img_image2.webp"
                                  className="absolute h-[33px] inset-[0] justify-center m-[auto] object-cover w-[32px]"
                                  alt="imageFour One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-white_A700 bottom-[0] flex inset-x-[0] items-start justify-end mx-[auto] p-[24px] sm:px-[20px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start md:ml-[0] ml-[7px] mt-[5px] md:w-[100%] w-[76%]">
                        <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Subcrible us
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] not-italic text-bluegray_400 text-left w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            To make friend with others in our community
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Button className="bg-deep_orange_300 cursor-pointer font-semibold min-w-[149px] py-[17px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                            Subcrible now
                          </Button>
                          <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[78px] py-[15px] rounded-[24px] text-[14px] text-bluegray_800 text-center w-[auto]">
                            skip
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[19px] items-center justify-between mt-[19px] w-[100%]">
                  <div className="h-[436px] relative md:w-[100%] w-[67%]">
                    <div className="flex flex-col gap-[11px] h-[100%] items-start justify-start ml-[54px] my-[auto] pr-[4px] pt-[4px] w-[auto]">
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Balance
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        $0.0
                      </Text>
                    </div>
                    <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                          <Text
                            className="font-bold mb-[4px] mt-[7px] text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            My card
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            className="h-[32px] w-[32px]"
                            alt="morehorizontal"
                          />
                        </div>
                        <SelectBox
                          className="border-[1px] border-indigo_51 border-solid font-medium mt-[28px] py-[16px] rounded-[4px] text-[14px] text-bluegray_800 text-left sm:w-[100%] w-[44%]"
                          placeholderClassName="text-bluegray_800"
                          name="language"
                          placeholder="1234 **** 4567 8901 "
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[20px] mr-[16px] w-[20px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                        <div className="flex md:flex-col flex-row md:gap-[48px] items-start justify-between mt-[16px] md:w-[100%] w-[99%]">
                          <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[44%]">
                            <div className="bg-indigo_400 flex flex-row items-start justify-between pt-[6px] rounded-[4px] w-[100%]">
                              <div className="md:h-[177px] h-[83px] mt-[94px] relative w-[61%]">
                                <Text
                                  className="absolute bottom-[33%] font-medium right-[0] text-left text-white_A700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  1234 **** 4567 8901{" "}
                                </Text>
                                <Img
                                  src="defaultNoData.png"
                                  className="absolute h-[83px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[4px] w-[auto]"
                                  alt="Group Five"
                                />
                              </div>
                              <div className="h-[161px] md:h-[177px] mb-[16px] relative w-[26%]">
                                <Img
                                  src="images/img_group_12X40.svg"
                                  className="h-[12px] mt-[13px] mx-[auto] rounded-[4px] w-[auto]"
                                  alt="Group Six"
                                />
                                <Img
                                  src="defaultNoData.png"
                                  className="absolute h-[161px] inset-[0] justify-center m-[auto] object-cover rounded-[4px] w-[auto]"
                                  alt="Group Seven"
                                />
                              </div>
                            </div>
                            <Button className="bg-white_A700 cursor-pointer font-semibold min-w-[301px] py-[17px] rounded-[4px] text-[14px] text-center text-deep_orange_300 w-[auto]">
                              Add new card
                            </Button>
                          </div>
                          <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[50%]">
                            <div className="flex flex-row gap-[91px] items-center justify-start pt-[2px] px-[2px] w-[100%]">
                              <Text
                                className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Card Type
                              </Text>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Visa
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[79px] items-center justify-start p-[3px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Card holder
                              </Text>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                AvoRi
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between p-[2px] w-[100%]">
                              <Text
                                className="font-normal ml-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Card number
                              </Text>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                1234 **** 4567 8901{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[114px] items-start justify-start w-[100%]">
                              <Text
                                className="font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Expired
                              </Text>
                              <Text
                                className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                21/09
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-normal my-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                CVV
                              </Text>
                              <Text
                                className="font-medium mb-[4px] mr-[134px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                ***
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[66px] items-center justify-start pt-[4px] px-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Total balance
                              </Text>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $0.0
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-end justify-end pt-[16px] px-[16px] rounded-[4px] shadow-bs md:w-[100%] w-[33%]">
                    <div className="flex flex-col gap-[37px] items-start justify-start mt-[21px] md:w-[100%] w-[96%]">
                      <Text
                        className="font-bold text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Transactions
                      </Text>
                      <div className="flex flex-row gap-[31px] items-start justify-between w-[100%]">
                        <List
                          className="flex-col grid w-[90%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between pr-[2px] py-[2px] w-[65%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="RobotoToyFaceFinalTwo"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start mr-[4px] w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Ackerman
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between w-[63%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="PunkToyFaceOne"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Blanker{" "}
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              +$100.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between w-[63%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="VanGoghByAmritOne"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Lee Ri
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between w-[63%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="RarePepeNakamotoToyFace"
                              />
                              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Jackson
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$10.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex items-start justify-start my-[0] pr-[2px] pt-[2px] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[64%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[13px] md:h-[auto] object-cover rounded-[23px] w-[26%]"
                                alt="TinTinTwentyTwo"
                              />
                              <div className="flex flex-col gap-[13px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Yomaha
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div className="bg-gray_51 flex items-center justify-start mb-[32px] pb-[177px] rounded-[2px] w-[2%]">
                          <Line className="bg-deep_orange_300 h-[134px] w-[4px]" />
                        </div>
                      </div>
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

export default DashboardOnePage;
