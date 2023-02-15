import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardTwoPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[1012px] md:w-[100%] w-[86%]">
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
          <Line className="bg-indigo_51 h-[1542px] md:h-[1px] md:w-[100%] w-[1px]" />
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
            <div className="bg-gray_51 flex font-poppins items-center justify-start sm:pl-[20px] pl-[23px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] w-[74%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[25%]">
                      <Button className="bg-white_A700 flex h-[48px] items-center justify-center p-[14px] rounded-[4px] w-[48px]">
                        <Img
                          src="images/img_buttonprimary.svg"
                          className="h-[20px]"
                          alt="ButtonPrimary"
                        />
                      </Button>
                      <div className="bg-deep_orange_300 flex flex-row gap-[35px] items-center justify-between p-[14px] rounded-[4px] w-[72%]">
                        <Text
                          className="font-medium ml-[3px] text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Add task
                        </Text>
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] mr-[2px] w-[20px]"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[44%]">
                        <div className="gap-[20px] grid grid-cols-2 justify-center min-h-[auto] w-[100%]">
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button className="bg-gray_102 flex h-[48px] items-center justify-center p-[14px] rounded-[4px] w-[48px]">
                                <Img
                                  src="images/img_buttonprimary_48X48.svg"
                                  className="h-[20px]"
                                  alt="ButtonPrimary One"
                                />
                              </Button>
                              <div className="flex flex-col gap-[12px] items-center justify-end pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  50+
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Available Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button className="bg-yellow_50 flex h-[48px] items-center justify-center p-[14px] rounded-[4px] w-[48px]">
                                <Img
                                  src="images/img_buttonprimary_1.svg"
                                  className="h-[20px]"
                                  alt="ButtonPrimary Two"
                                />
                              </Button>
                              <div className="flex flex-col gap-[12px] items-center justify-end pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  20
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Obsolete Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button className="bg-gray_103 flex h-[48px] items-center justify-center p-[14px] rounded-[4px] w-[48px]">
                                <Img
                                  src="images/img_buttonprimary_2.svg"
                                  className="h-[20px]"
                                  alt="ButtonPrimary Three"
                                />
                              </Button>
                              <div className="flex flex-col gap-[13px] justify-end pr-[5px] pt-[5px] w-[100%]">
                                <Text
                                  className="font-bold md:ml-[0] ml-[36px] mr-[42px] text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  23
                                </Text>
                                <Text
                                  className="font-normal mr-[27px] not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  In Progress
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Button className="bg-gray_52 flex h-[48px] items-center justify-center p-[14px] rounded-[4px] w-[48px]">
                                <Img
                                  src="images/img_buttonprimary_3.svg"
                                  className="h-[20px]"
                                  alt="ButtonPrimary Four"
                                />
                              </Button>
                              <div className="flex flex-col gap-[12px] justify-end pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold md:ml-[0] ml-[36px] mr-[43px] text-bluegray_800 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  35
                                </Text>
                                <Text
                                  className="font-normal mr-[27px] not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Done Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[55%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
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
                          <div className="flex flex-row gap-[31px] items-center justify-between mt-[28px] md:w-[100%] w-[99%]">
                            <div className="flex flex-col gap-[27px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                800
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                600
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                400
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                200
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                0
                              </Text>
                            </div>
                            <Img
                              src="images/img_frame_176X344.svg"
                              className="h-[176px] w-[auto]"
                              alt="Frame"
                            />
                          </div>
                          <div className="flex flex-row gap-[34px] items-start justify-start ml-[auto] mt-[20px] pb-[2px] px-[2px] md:w-[100%] w-[89%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Mon
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Tue
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Wed
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Thu
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Fri
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Sat
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              Sun
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[125px] mt-[32px] md:w-[100%] w-[38%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[38%]">
                              <div className="bg-amber_300 h-[6px] mb-[2px] mt-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Income
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[47%]">
                              <div className="bg-indigo_400 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Expenses
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-end justify-between w-[100%]">
                            <Text
                              className="font-bold my-[5px] text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Projects
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-[32px] w-[32px]"
                              alt="morehorizontal"
                            />
                          </div>
                          <div className="h-[190px] md:h-[218px] mt-[28px] relative w-[190px]">
                            <div className="h-[190px] m-[auto] w-[190px]">
                              <CircularProgressbar
                                className="border-solid h-[190px] m-[auto] overflow-visible w-[190px]"
                                value={17}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(-23deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                              <CircularProgressbar
                                className="absolute border-solid h-[190px] inset-[0] justify-center m-[auto] overflow-visible w-[190px]"
                                value={24}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(51deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute bottom-[34%] flex flex-col gap-[9px] items-center justify-start right-[31%] w-[auto]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                230+
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Projects
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[32px] items-start justify-center mt-[24px] md:w-[100%] w-[72%]">
                            <div className="flex flex-row gap-[12px] items-center justify-between w-[22%]">
                              <div className="bg-green_700 h-[6px] my-[17px] rounded-[50%] w-[6px]"></div>
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  High
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center w-[20%]">
                              <div className="bg-indigo_400 h-[6px] mb-[14px] mt-[17px] rounded-[50%] w-[6px]"></div>
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  30
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Low
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-between w-[30%]">
                              <div className="bg-amber_300 h-[6px] my-[17px] rounded-[50%] w-[6px]"></div>
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Medium
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[55%]">
                        <div className="flex flex-col gap-[32px] items-center justify-start mb-[6px] md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Active tasks
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-between w-[60%]">
                              <Button className="bg-bluegray_900 cursor-pointer font-semibold min-w-[75px] py-[11px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
                                Day
                              </Button>
                              <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-semibold min-w-[75px] py-[13px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                                Week
                              </Button>
                              <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-semibold min-w-[75px] py-[13px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                                Month
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start w-[100%]">
                            <List
                              className="flex-col gap-[20px] grid items-center w-[97%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-row gap-[20px] items-center justify-start mr-[20px] my-[0] md:w-[100%] w-[95%]">
                                <Img
                                  src="images/img_square.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="square"
                                />
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[89%]">
                                  <Text
                                    className="font-medium text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    ACKERMAN_LHN
                                  </Text>
                                  <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                    <Line className="bg-red_600 h-[16px] my-[4px] w-[4px]" />
                                    <Text
                                      className="font-medium text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      <span className="text-bluegray_900 text-[16px] font-inter">
                                        Changelog Revamp{" "}
                                      </span>
                                      <span className="text-red_600 text-[16px] font-inter">
                                        #ver 1.0
                                      </span>
                                      <span className="text-bluegray_900 text-[16px] font-inter">
                                        {" "}
                                        Homescreen{" "}
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex flex-row gap-[20px] items-center justify-start mr-[75px] my-[0] md:w-[100%] w-[81%]">
                                <Img
                                  src="images/img_squarecheckbox.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="squarecheckbox"
                                />
                                <div className="flex flex-col gap-[11px] items-start justify-start w-[87%]">
                                  <Text
                                    className="font-medium text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    JOHNSON
                                  </Text>
                                  <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                    <Line className="bg-deep_orange_300 h-[16px] my-[4px] w-[4px]" />
                                    <Text
                                      className="font-medium text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Create user flow for Data Projects
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between my-[0] w-[100%]">
                                <Img
                                  src="images/img_square.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="square One"
                                />
                                <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    AVORI
                                  </Text>
                                  <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                    <Line className="bg-indigo_400 h-[16px] my-[16px] w-[4px]" />
                                    <Text
                                      className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[97%]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Gather to discuss about new project
                                      deriving from Avocado
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start p-[30px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                          <Text
                            className="font-bold mb-[4px] mt-[7px] text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Posting Tasks
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            className="h-[32px] w-[32px]"
                            alt="morehorizontal One"
                          />
                        </div>
                        <Text
                          className="font-normal mt-[9px] not-italic text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Crucial tasks
                          </a>
                          <span className="text-bluegray_900 text-[14px] font-inter">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Urgent tasks
                          </a>
                          <span className="text-bluegray_900 text-[14px] font-inter">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Normal tasks
                          </a>
                        </Text>
                        <div className="sm:h-[330px] h-[401px] md:h-[485px] mt-[29px] relative w-[100%]">
                          <div className="absolute bg-gray_51 flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] top-[0] w-[100%]">
                            <div className="flex h-[48px] justify-end relative md:w-[100%] w-[13%]">
                              <Text
                                className="font-semibold mb-[14px] ml-[auto] mr-[24px] mt-[auto] text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Time
                              </Text>
                              <div className="absolute bg-deep_orange_300 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Time
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-evenly md:w-[100%] w-[88%]">
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Mon 10
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Tue 11
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Wed 12
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Thu 13
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Fri 14
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[16px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Sat 15
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[2%] w-[auto]">
                            <Text
                              className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              09 am
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              10 am
                            </Text>
                            <Text
                              className="font-normal mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              11 am
                            </Text>
                            <Text
                              className="font-normal mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              12 pm
                            </Text>
                            <Text
                              className="font-normal mt-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              01 pm
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[3px] mt-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              02 pm
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] mt-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              03 pm
                            </Text>
                          </div>
                          <List
                            className="absolute bg-cover bg-no-repeat flex-col gap-[10px] grid h-[401px] inset-y-[0] my-[auto] p-[11px] right-[0] w-[89%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group2313.svg')",
                            }}
                            orientation="vertical"
                          >
                            <div className="bg-white_A700 flex items-start justify-start ml-[40px] mr-[478px] my-[0] rounded-[4px] shadow-bs md:w-[100%] w-[25%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[72%]">
                                <Line className="bg-green_700 h-[171px] w-[4px]" />
                                <div className="flex flex-col items-start justify-start w-[84%]">
                                  <Button className="bg-deep_orange_300 cursor-pointer font-poppins font-semibold min-w-[93px] py-[6px] rounded-[4px] text-[10px] text-center text-white_A700 w-[auto]">
                                    #Data projects
                                  </Button>
                                  <Text
                                    className="font-inter font-semibold mt-[13px] text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Revamp UI, UX
                                  </Text>
                                  <div className="h-[24px] md:h-[85px] mt-[61px] relative w-[36%]">
                                    <Img
                                      src="defaultNoData.png"
                                      className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[24px]"
                                      alt="RobotoToyFaceFinalTwo"
                                    />
                                    <Img
                                      src="defaultNoData.png"
                                      className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[24px]"
                                      alt="Fidenza978ToyFace"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-start justify-start ml-[297px] mr-[289px] my-[0] rounded-[4px] shadow-bs md:w-[100%] w-[15%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[77%]">
                                <Line className="bg-indigo_400 h-[137px] rounded-[4px] w-[4px]" />
                                <div className="flex flex-col items-start justify-start w-[74%]">
                                  <Button className="bg-indigo_400 cursor-pointer font-poppins font-semibold min-w-[49px] py-[7px] rounded-[4px] text-[10px] text-center text-white_A700 w-[auto]">
                                    #2011
                                  </Button>
                                  <Text
                                    className="font-inter font-semibold mt-[13px] text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Meeting
                                  </Text>
                                  <div className="h-[24px] md:h-[51px] mt-[27px] relative w-[65%]">
                                    <Img
                                      src="defaultNoData.png"
                                      className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[24px]"
                                      alt="RobotoToyFaceFinalTwo One"
                                    />
                                    <Img
                                      src="defaultNoData.png"
                                      className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[24px]"
                                      alt="Fidenza978ToyFace One"
                                    />
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
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[16px] rounded-[4px] shadow-bs md:w-[100%] w-[26%]">
                  <div className="flex flex-col items-center justify-start mb-[27px] md:w-[100%] w-[90%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Calendar
                      </Text>
                      <Img
                        src="images/img_morehorizontal.svg"
                        className="h-[32px] w-[32px]"
                        alt="morehorizontal Two"
                      />
                    </div>
                    <div className="flex flex-col font-inter gap-[23px] items-center justify-start mt-[15px] w-[100%]">
                      <div className="flex flex-row gap-[29px] items-start justify-between md:w-[100%] w-[99%]">
                        <Button className="bg-gray_51 flex h-[40px] items-center justify-center p-[13px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_buttonprimary_40X40.svg"
                            className="h-[14px]"
                            alt="ButtonPrimary Five"
                          />
                        </Button>
                        <Text
                          className="font-semibold mt-[14px] text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-bluegray_800 text-[14px] font-inter">
                            Febuary{" "}
                          </span>
                          <span className="text-bluegray_400 text-[14px] font-inter">
                            2022
                          </span>
                        </Text>
                        <Button className="bg-gray_51 flex h-[40px] items-center justify-center p-[13px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_buttonprimary_4.svg"
                            className=""
                            alt="ButtonPrimary Six"
                          />
                        </Button>
                      </div>
                      <div className="w-[100%]"></div>
                    </div>
                    <div className="flex flex-row font-poppins items-center justify-between mt-[53px] md:w-[100%] w-[99%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Recent activities
                      </Text>
                      <Img
                        src="images/img_morehorizontal.svg"
                        className="h-[32px] w-[32px]"
                        alt="morehorizontal Three"
                      />
                    </div>
                    <List
                      className="flex-col font-inter gap-[18.54px] grid items-center mt-[37px] w-[99%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center pr-[2px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[76%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-red_600 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[76%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_400 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-green_700 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[95%]"
                                as="h5"
                                variant="h5"
                              >
                                Gather to discuss about new project deriving
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[76%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_400 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Urgent meeting with CEO
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center sm:pr-[20px] md:pr-[40px] pr-[46px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-red_600 h-[24px] w-[4px]" />
                              <Text
                                className="font-medium text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Daily meeting with tem
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[94%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_400 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Revision design system
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[94%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-green_700 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog authentication
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[85%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-indigo_400 h-[22px] w-[4px]" />
                              <Text
                                className="font-medium text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Pitching with client
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[94%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-red_600 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-medium leading-[24.00px] text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Year end party and plan for 2022
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </List>
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

export default DashboardTwoPage;
