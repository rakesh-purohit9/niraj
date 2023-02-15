import React from "react";

import { Img, Text, Line, Input, Button, Radio, List } from "components";
import { CloseSVG } from "../../assets/images";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FileManagementDefaultPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[37px] items-center justify-start p-[29px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[7px] w-[auto]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[419px] md:w-[100%] w-[87%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[73%]">
                  <Img
                    src="images/img_icon_12.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[34px] md:w-[100%] w-[68%]">
                  <Img
                    src="images/img_icon_4.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon One"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[32px] items-center justify-between md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                    <Img
                      src="images/img_icon_5.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="Icon Two"
                    />
                    <Text
                      className="font-normal mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
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
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_icon_15.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Three"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[64%]">
                  <Img
                    src="images/img_icon_7.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Four"
                  />
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start md:ml-[0] ml-[3px] mt-[34px] md:w-[100%] w-[46%]">
                  <Img
                    src="images/img_icon_8.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="Icon Five"
                  />
                  <Text
                    className="font-normal mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[33px] md:w-[100%] w-[43%]">
                  <Img
                    src="images/img_icon_9.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Six"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
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
                    className="font-normal mb-[2px] mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1px] h-[950px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col font-inter items-center justify-start md:px-[20px] w-[100%]">
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
            <div className="bg-gray_51 flex font-poppins items-center justify-end p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between mt-[16px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[24%]">
                  <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      File Management
                    </Text>
                    <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <Accordion
                          preExpanded={[0]}
                          className="font-inter gap-[24px] w-[100%]"
                        >
                          {" "}
                          {[...Array(3)].map((item, index) => (
                            <AccordionItem uuid={index} key={Math.random()}>
                              <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                                <AccordionItemHeading className="w-full">
                                  <AccordionItemButton>
                                    <AccordionItemState>
                                      {({ expanded }) => (
                                        <div className="flex flex-row items-center justify-between w-[100%]">
                                          <div className="flex flex-row gap-[13px] items-center justify-start w-[auto]">
                                            <Img
                                              src="images/img_line_24X24.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="Line One"
                                            />
                                            <Text
                                              className="font-medium text-bluegray_900 text-left w-[auto]"
                                              as="h5"
                                              variant="h5"
                                            >
                                              Main File
                                            </Text>
                                          </div>
                                          {expanded && (
                                            <Img
                                              src="images/img_carretup.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="carretup"
                                            />
                                          )}
                                          {!expanded && (
                                            <Img
                                              src="images/img_carretup.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="carretup One"
                                            />
                                          )}
                                        </div>
                                      )}
                                    </AccordionItemState>
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="w-full">
                                  <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[36px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Product Design
                                    </Text>
                                    <Text
                                      className="font-normal mt-[20px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Outsource
                                    </Text>
                                    <Text
                                      className="font-normal mt-[25px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Graphics
                                    </Text>
                                    <Text
                                      className="font-normal mt-[22px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Empty states
                                    </Text>
                                  </div>
                                </AccordionItemPanel>
                              </div>
                            </AccordionItem>
                          ))}
                        </Accordion>
                        <Button
                          className="bg-red_54 flex items-center justify-center px-[31px] py-[9px] rounded-[24px] sm:px-[20px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_plus_24X24.svg"
                              className="ml-[13px] text-center"
                              alt="plus"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-bold font-poppins text-[14px] text-deep_orange_300 text-left">
                            Add new folder
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col font-inter justify-start pr-[16px] py-[16px] rounded-[4px] shadow-bs w-[100%]">
                    <Img
                      src="images/img_x.svg"
                      className="h-[24px] md:ml-[0] ml-[233px] w-[24px]"
                      alt="x"
                    />
                    <div className="h-[192px] md:h-[70px] mr-[7px] relative w-[98%]">
                      <div className="absolute h-[126px] inset-x-[0] mx-[auto] top-[0] w-[98%]">
                        <div className="md:h-[56px] h-[81px] mb-[-25.14px] ml-[auto] mr-[58px] w-[40%] z-[1]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[81px] m-[auto] object-cover w-[100%]"
                            alt="base"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat h-[81px] inset-[0] justify-center m-[auto] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/defaultNoData.png')",
                            }}
                          >
                            <div className="h-[65px] m-[auto] w-[90%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[65px] m-[auto] object-cover w-[100%]"
                                alt="paper"
                              />
                              <Img
                                src="defaultNoData.png"
                                className="absolute h-[65px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                                alt="color"
                              />
                            </div>
                            <div className="absolute h-[81px] inset-[0] justify-center m-[auto] w-[100%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[81px] m-[auto] object-cover w-[100%]"
                                alt="specular"
                              />
                              <div className="absolute h-[81px] inset-[0] justify-center m-[auto] w-[100%]">
                                <Img
                                  src="defaultNoData.png"
                                  className="h-[81px] m-[auto] object-cover w-[100%]"
                                  alt="specular One"
                                />
                                <Img
                                  src="defaultNoData.png"
                                  className="absolute h-[81px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                  alt="specular Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-[auto] mx-[auto] overflow-x-auto w-[100%]">
                          <div className="h-[69px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[69px] my-[auto] object-cover w-[100%]"
                              alt="shadow"
                            />
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-[47px] object-cover right-[18%] top-[0] w-[53%]"
                              alt="shadow One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-[8px] items-center justify-start right-[0] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Upgrade Features
                        </Text>
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-center w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Upgrade account to access multiple features
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-end justify-center mb-[16px] md:ml-[0] ml-[75px] mt-[44px] md:w-[100%] w-[50%]">
                      <Text
                        className="font-bold mb-[2px] mt-[5px] text-deep_orange_300 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Upgrade now
                      </Text>
                      <Img
                        src="images/img_chevronsright.svg"
                        className="h-[24px] w-[24px]"
                        alt="chevronsright"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 font-inter items-center justify-start md:mt-[0] mt-[56px] p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                  <div className="flex flex-col gap-[35px] items-center justify-start mb-[16px] md:w-[100%] w-[98%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[26px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Main File
                          </Text>
                          <Button className="bg-gray_51 flex h-[40px] items-center justify-center sm:ml-[0] ml-[326px] p-[10px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_search_bluegray_900.svg"
                              className="h-[20px]"
                              alt="search"
                            />
                          </Button>
                          <Button className="bg-gray_51 flex h-[40px] items-center justify-center sm:ml-[0] ml-[16px] p-[10px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_buttonprimary_7.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary"
                            />
                          </Button>
                        </div>
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="gap-[20px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                            <div className="bg-white_A700 border-[1px] border-indigo_51 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="IconFileGlyph"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="morehorizontal"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-[100%]">
                                  <div className="flex flex-col gap-[8px] items-start justify-start pr-[4px] py-[4px] w-[auto]">
                                    <Text
                                      className="font-bold text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Product Design
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-medium mb-[4px] mt-[31px] text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-indigo_51 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="IconFileGlyph One"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="morehorizontal One"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-[100%]">
                                  <div className="flex flex-col gap-[12px] items-start justify-end pr-[4px] py-[4px] w-[auto]">
                                    <Text
                                      className="font-bold text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Outsource
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-medium mb-[4px] mt-[31px] text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-indigo_51 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="IconFileGlyph Two"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="morehorizontal Two"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-[100%]">
                                  <div className="flex flex-col gap-[8px] items-start justify-end pr-[4px] py-[4px] w-[auto]">
                                    <Text
                                      className="font-bold text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Graphics
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-medium mb-[4px] mt-[31px] text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-indigo_51 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="IconFileGlyph Three"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="morehorizontal Three"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-[100%]">
                                  <div className="flex flex-col gap-[8px] items-start justify-end pr-[4px] py-[4px] w-[auto]">
                                    <Text
                                      className="font-bold text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Empty States
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-medium mb-[4px] mt-[31px] text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Recent files
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-evenly w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                View all
                              </Text>
                              <Img
                                src="images/img_arrowright_bluegray_800.svg"
                                className="h-[20px] w-[20px]"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[35px] pr-[3px] py-[3px] md:w-[100%] w-[93%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Name
                            </Text>
                            <Text
                              className="font-normal sm:ml-[0] ml-[146px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Date motified
                            </Text>
                            <Text
                              className="font-normal sm:ml-[0] ml-[83px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Size
                            </Text>
                          </div>
                          <div className="bg-gray_51 flex items-start justify-start mt-[16px] p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:w-[100%] w-[92%]">
                              <div className="flex flex-row gap-[14px] items-center justify-start sm:w-[100%] w-[28%]">
                                <Img
                                  src="images/img_file.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="file One"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  index.html
                                </Text>
                              </div>
                              <Text
                                className="font-normal sm:ml-[0] ml-[74px] sm:mt-[0] mt-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10.10.2021, 09:45
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[54px] sm:mt-[0] my-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                09 KB
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex items-start justify-start p-[20px] w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:w-[100%] w-[93%]">
                              <Radio
                                value="imagepng"
                                className="font-normal not-italic text-[16px] text-bluegray_900 text-left"
                                inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                                checked={false}
                                name="imagepng"
                                label="imagepng"
                              ></Radio>
                              <Text
                                className="font-normal sm:ml-[0] ml-[71px] sm:mt-[0] mt-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10.10.2021, 09:45
                              </Text>
                              <Text
                                className="font-normal sm:ml-[0] ml-[54px] sm:mt-[0] my-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                110 KB
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_51 flex items-start justify-start p-[20px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:w-[100%] w-[91%]">
                            <div className="flex flex-row gap-[14px] items-center justify-start sm:w-[100%] w-[34%]">
                              <Img
                                src="images/img_filetext.svg"
                                className="h-[24px] w-[24px]"
                                alt="filetext"
                              />
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Document.txt
                              </Text>
                            </div>
                            <Text
                              className="font-normal sm:ml-[0] ml-[50px] sm:mt-[0] mt-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              10.10.2021, 09:45
                            </Text>
                            <Text
                              className="font-normal sm:ml-[0] ml-[54px] sm:mt-[0] my-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              10 KB
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-start justify-end md:mt-[0] mt-[56px] p-[31px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                  <Text
                    className="font-bold mt-[8px] text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Storage
                  </Text>
                  <div className="md:h-[222px] h-[485px] mt-[32px] relative w-[100%]">
                    <div className="absolute h-[190px] inset-x-[0] mx-[auto] top-[0] w-[190px]">
                      <CircularProgressbar
                        className="border-solid h-[190px] m-[auto] overflow-visible w-[190px]"
                        value={16}
                        strokeWidth={1}
                        styles={{
                          trail: { strokeWidth: 1, stroke: "" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(-90deg)",
                          },
                        }}
                      ></CircularProgressbar>
                      <div className="absolute flex flex-col gap-[8px] inset-x-[0] items-center justify-start mx-[auto] top-[34%] w-[auto]">
                        <Text
                          className="text-bluegray_800 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          25Gb
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Used of 50GB
                        </Text>
                      </div>
                    </div>
                    <List
                      className="absolute bottom-[0] flex-col grid inset-x-[0] items-center mx-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[16px] items-center justify-between my-[0] w-[100%]">
                        <Img
                          src="images/img_image.svg"
                          className="h-[24px] w-[24px]"
                          alt="image One"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-[7px] items-start justify-end pr-[4px] py-[4px] w-[auto]">
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Image
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                      <div className="flex flex-1 flex-row gap-[16px] items-center justify-between my-[0] w-[100%]">
                        <Img
                          src="images/img_playcircle.svg"
                          className="h-[24px] w-[24px]"
                          alt="playcircle"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Videos
                            </Text>
                            <Text
                              className="font-normal mb-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                      <div className="flex flex-1 flex-row gap-[16px] items-center justify-between my-[0] w-[100%]">
                        <Img
                          src="images/img_music.svg"
                          className="h-[24px] w-[24px]"
                          alt="music"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Muscics
                            </Text>
                            <Text
                              className="font-normal mb-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                      <div className="flex flex-1 flex-row gap-[16px] items-center justify-between my-[0] w-[100%]">
                        <Img
                          src="images/img_archive.svg"
                          className="h-[24px] w-[24px]"
                          alt="archive"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-bold mt-[2px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Others
                            </Text>
                            <Text
                              className="font-normal mb-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="border-[2px] border-indigo_51 border-solid flex items-center justify-start mt-[32px] p-[35px] sm:px-[20px] rounded-[4px] w-[100%]">
                    <div className="flex flex-col gap-[17px] items-center justify-start md:w-[100%] w-[49%]">
                      <Img
                        src="images/img_downloadcloud.svg"
                        className="h-[24px] w-[24px]"
                        alt="downloadcloud"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Import file
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

export default FileManagementDefaultPage;
