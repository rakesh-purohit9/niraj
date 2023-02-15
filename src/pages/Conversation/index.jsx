import React from "react";

import { Img, Text, Line, Input, List, Radio, Button } from "components";
import { CloseSVG } from "../../assets/images";

const ConversationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] pb-[7px] w-[100%]">
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="flex flex-col gap-[36px] items-center justify-start mb-[425px] ml-[29px] mr-[54px] mt-[36px] w-[66%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] w-[auto]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start w-[100%]">
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
                      src="images/img_icon_16.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="Icon Two"
                    />
                    <Text
                      className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
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
          <Line className="bg-indigo_51 md:h-[1px] h-[927px] md:w-[100%] w-[1px]" />
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
            <div className="bg-gray_51 flex flex-col font-poppins gap-[32px] items-start justify-end p-[23px] sm:px-[20px] w-[100%]">
              <Text
                className="mt-[17px] text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Message
              </Text>
              <div className="bg-white_A700 flex md:flex-col flex-row font-inter gap-[26px] items-center justify-end sm:pl-[20px] pl-[32px] rounded-[4px] shadow-bs w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[35%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[46%]">
                    <div className="border-[2px] border-green_700 border-solid md:h-[48px] h-[62px] p-[7px] relative rounded-[50%] w-[62px]">
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[48px] inset-[0] justify-center m-[auto] rounded-[50%] w-[48px]"
                        alt="RobotoToyFaceFinalTwo"
                      />
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start pr-[5px] pt-[5px] w-[auto]">
                      <Text
                        className="font-bold text-bluegray_800 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Ackerman
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        My accout
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Online (10)
                    </Text>
                    <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[24px] grid grid-cols-5 w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[12px] items-center justify-start mb-[3px] sm:ml-[0] w-[100%]">
                          <div className="md:h-[48px] h-[51px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                              alt="PunkToyFaceOne"
                            />
                            <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lee
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start mb-[4px] sm:ml-[0] w-[100%]">
                          <div className="md:h-[48px] h-[51px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                              alt="Indiahigh"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Riri
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mb-[3px] sm:ml-[0] w-[100%]">
                          <div className="md:h-[48px] h-[51px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                              alt="TinTinTwentyTwo"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[3px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Jimo
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-center justify-start mb-[3px] sm:ml-[0] w-[100%]">
                          <div className="md:h-[48px] h-[51px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                              alt="VanGoghByAmritOne"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Acker
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] pb-[2px] pr-[2px] w-[100%]">
                          <div className="md:h-[48px] h-[51px] md:ml-[0] ml-[2px] relative w-[96%]">
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                              alt="Punk9252ToyFaceEditATwo"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Momo
                          </Text>
                        </div>
                      </List>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="font-medium p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="bg-gray_51 flex pl-[16px] pr-[22px] py-[13px] rounded-[4px] sm:pr-[20px] sm:w-[100%] w-[99%]"
                    name="SearchBox One"
                    placeholder="Search..."
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer mr-[8px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#828fa2"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                  <List
                    className="flex-col grid items-center pb-[21px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="md:h-[48px] h-[51px] relative w-[13%]">
                        <Img
                          src="defaultNoData.png"
                          className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                          alt="PunkToyFaceOne One"
                        />
                        <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[13px] items-start justify-end w-[auto]">
                          <Text
                            className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Lee Ankar
                          </Text>
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hey! Can i meet you for a sec?
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[13px] items-start justify-end pl-[2px] pt-[2px] w-[auto]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            now
                          </Text>
                          <Text
                            className="bg-red_600 flex font-bold h-[24px] items-center justify-center md:ml-[0] ml-[4px] rounded-[50%] text-center text-white_A700 w-[24px]"
                            variant="body1"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[83%]" />
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="md:h-[48px] h-[51px] relative w-[13%]">
                        <Img
                          src="defaultNoData.png"
                          className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                          alt="TinTinTwentyTwo One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[14px] items-start justify-end w-[auto]">
                          <Text
                            className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Jimo
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                          <Text
                            className="font-normal mb-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[83%]" />
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="md:h-[48px] h-[51px] relative w-[13%]">
                        <Img
                          src="defaultNoData.png"
                          className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                          alt="Punk9252ToyFaceEditATwo One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[13px] items-start justify-end w-[auto]">
                          <Text
                            className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Momo
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                          <Text
                            className="font-normal mb-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[83%]" />
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="md:h-[48px] h-[51px] relative w-[13%]">
                        <Img
                          src="defaultNoData.png"
                          className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                          alt="Indiahigh One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[14px] items-start justify-end w-[auto]">
                          <Text
                            className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Riri Lee
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                          <Text
                            className="font-normal mb-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <Line className="bg-indigo_51 md:h-[1px] h-[747px] md:w-[100%] w-[1px]" />
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[63%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[92%]">
                      <div className="flex flex-col gap-[12px] items-start justify-end pr-[3px] pt-[3px] md:w-[100%] w-[15%]">
                        <Text
                          className="font-bold mt-[2px] text-bluegray_800 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Lee Ankar
                        </Text>
                        <Radio
                          value="Online"
                          className="font-medium text-[14px] text-bluegray_800 text-left"
                          inputClassName="bg-green_700 h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="ProfileViewsOne"
                          label="Online"
                        ></Radio>
                      </div>
                      <Button className="bg-gray_51 flex h-[48px] items-center justify-center mb-[10px] md:ml-[0] ml-[437px] p-[14px] rounded-[50%] w-[48px]">
                        <Img
                          src="images/img_search_bluegray_900.svg"
                          className="h-[20px]"
                          alt="search"
                        />
                      </Button>
                      <Button className="bg-gray_51 flex h-[48px] items-center justify-center mb-[10px] md:ml-[0] ml-[16px] p-[14px] rounded-[50%] w-[48px]">
                        <Img
                          src="images/img_buttonprimary_7.svg"
                          className="h-[20px]"
                          alt="ButtonPrimary"
                        />
                      </Button>
                    </div>
                    <Line className="bg-indigo_51 h-[1px] mt-[24px] w-[100%]" />
                    <div className="flex flex-col items-start justify-start mt-[35px] md:w-[100%] w-[92%]">
                      <div className="flex flex-col relative w-[50%]">
                        <div className="flex flex-col gap-[12px] justify-start mx-[auto] w-[100%]">
                          <Text
                            className="font-normal md:ml-[0] ml-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lee Ankar{" "}
                          </Text>
                          <div className="flex flex-row gap-[12px] items-start justify-between w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="PunkToyFaceOne Two"
                            />
                            <div className="bg-gray_51 flex items-start justify-end p-[16px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[auto]">
                              <Text
                                className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Hey! Can i meet you for a sec?
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="bg-gray_51 border-[2px] border-solid border-white_A700 font-normal h-[28px] ml-[auto] mr-[11px] mt-[-10px] not-italic px-[6px] py-[5px] rounded-[50%] text-black_900 text-left w-[28px] z-[1]"
                          as="h5"
                          variant="h5"
                        >
                          😍
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] mt-[5px] md:w-[100%] w-[49%]">
                        <Input
                          className="font-medium pb-[16px] pl-[16px] sm:pr-[20px] pr-[35px] pt-[21px] text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                          wrapClassName="bg-deep_orange_300 rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] sm:w-[100%] w-[91%]"
                          name="Group Three"
                          placeholder="Hey! Can i meet you for a sec?"
                        ></Input>
                        <Img
                          src="images/img_circlecheckfull.svg"
                          className="h-[20px] mt-[36px] w-[20px]"
                          alt="circlecheckfull"
                        />
                      </div>
                      <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] mt-[16px] md:w-[100%] w-[49%]">
                        <div className="bg-gray_51 flex flex-col gap-[16px] items-start justify-start p-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[91%]">
                          <div className="h-[133px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[133px] m-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="Vector One"
                            />
                            <Button className="absolute bg-black_900_66 bottom-[6%] cursor-pointer font-medium min-w-[41px] py-[5px] right-[3%] rounded-[10px] text-[12px] text-center text-white_A700 w-[auto]">
                              1:00
                            </Button>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              ☕️ Life Style Coffee
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_402 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              8350 Melrose Ave, Los Angeles
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_circlecheckfull.svg"
                          className="h-[20px] mt-[215px] w-[20px]"
                          alt="circlecheckfull One"
                        />
                      </div>
                      <div className="bg-gray_51 flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[105px] p-[9px] rounded-[4px] w-[100%]">
                        <Input
                          className="flex-1 font-normal not-italic pb-[6px] pl-[3px] sm:pr-[20px] pr-[35px] pt-[12px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="bg-gray_51 md:ml-[0] md:w-[100%] ml-[4px] sm:ml-[0] sm:w-[100%] w-[75%]"
                          name="frame3801"
                          placeholder="Enter message..."
                        ></Input>
                        <Img
                          src="images/img_share2.svg"
                          className="h-[24px] md:ml-[0] ml-[17px] w-[24px]"
                          alt="shareTwo"
                        />
                        <Img
                          src="images/img_link2.svg"
                          className="h-[24px] md:ml-[0] ml-[24px] w-[24px]"
                          alt="linkTwo"
                        />
                        <Img
                          src="images/img_x.svg"
                          className="h-[24px] md:ml-[0] ml-[24px] w-[24px]"
                          alt="plus"
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
    </>
  );
};

export default ConversationPage;
