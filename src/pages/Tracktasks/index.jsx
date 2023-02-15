import React from "react";

import { Img, Text, Line, Input, Button } from "components";
import { CloseSVG } from "../../assets/images";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const TracktasksPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
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
            <div className="bg-gray_51 flex font-poppins items-center justify-start p-[19px] w-[100%]">
              <div className="flex flex-col gap-[32px] items-center justify-start mb-[99px] mt-[18px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="sm:mt-[0] mt-[2px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Product design
                  </Text>
                  <Text
                    className="font-normal mb-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px] font-poppins">
                      File management/
                    </span>
                    <span className="text-bluegray_800 text-[16px] font-poppins">
                      {" "}
                      Product design
                    </span>
                  </Text>
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="font-inter gap-[20px] w-[100%]"
                >
                  {" "}
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-start py-[24px] rounded-[4px] shadow-bs w-[100%]">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-col md:gap-[16px] items-center justify-between w-[100%]">
                                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[auto]">
                                    <Img
                                      src="images/img_carretup.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="carretup"
                                    />
                                    <div className="flex flex-row font-poppins items-center justify-center md:ml-[0] ml-[16px] md:w-[100%] w-[14%]">
                                      {expanded && (
                                        <Img
                                          src="images/img_line_24X24.svg"
                                          className="h-[24px] w-[24px]"
                                          alt="Line One"
                                        />
                                      )}
                                      <Text
                                        className="font-normal ml-[12px] not-italic text-bluegray_900 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        In process (10)
                                      </Text>
                                      {!expanded && (
                                        <Img
                                          src="images/img_line_24X24.svg"
                                          className="h-[24px] w-[24px]"
                                          alt="Line Three"
                                        />
                                      )}
                                    </div>
                                    <Button className="bg-gray_51 cursor-pointer font-semibold md:ml-[0] ml-[797px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-bluegray_800 text-center w-[98px]">
                                      Edit{" "}
                                    </Button>
                                  </div>
                                  <Line className="bg-indigo_51 h-[1px] w-[100%]" />
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full">
                          <div className="font-poppins gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mb-[8px] md:w-[100%] w-[95%]">
                            <div className="border-[2px] border-indigo_51 border-solid flex items-center justify-center p-[55px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                              <div className="flex flex-col gap-[43px] items-center justify-start my-[17px] w-[100%]">
                                <Button className="bg-red_55 flex h-[56px] items-center justify-center p-[18px] rounded-[50%] w-[56px]">
                                  <Img
                                    src="images/img_plus_24X24.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary"
                                  />
                                </Button>
                                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                                  <Text
                                    className="font-bold text-bluegray_800 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Add file
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-center w-[100%]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Add file to manage your vital task
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-end p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col items-start justify-start mt-[6px] w-[100%]">
                                <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    LD presentation file
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-left"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Introduction about LD
                                    <br />
                                    Project in detail
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[24px] items-start justify-start mt-[24px] w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Process (80%)
                                  </Text>
                                  <Img
                                    src="images/img_frame_indigo_51.svg"
                                    className="h-[1px] w-[auto]"
                                    alt="Frame"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between mt-[28px] w-[100%]">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-[40%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Members
                                    </Text>
                                    <div className="h-[32px] relative w-[64%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="absolute h-[32px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[32px]"
                                        alt="RobotoToyFaceFinalTwo"
                                      />
                                      <Img
                                        src="defaultNoData.png"
                                        className="absolute h-[32px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[32px]"
                                        alt="Fidenza978ToyFace"
                                      />
                                    </div>
                                  </div>
                                  <div className="bg-gray_51 h-[32px] md:h-[55px] mt-[35px] p-[6px] relative rounded-[50%] w-[32px]">
                                    <Img
                                      src="images/img_buttonprimary_7.svg"
                                      className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                                      alt="morevertical"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-end p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col items-start justify-start mt-[7px] w-[100%]">
                                <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Urgent Tasks
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-left"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Introduction about LD
                                    <br />
                                    Project in detail
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[24px] items-start justify-start mt-[24px] w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Process (10%)
                                  </Text>
                                  <Img
                                    src="images/img_frame_indigo_51_1X194.svg"
                                    className="h-[1px] w-[auto]"
                                    alt="Frame One"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between mt-[28px] w-[100%]">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-[40%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Members
                                    </Text>
                                    <div className="h-[32px] relative w-[64%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="absolute h-[32px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[32px]"
                                        alt="RobotoToyFaceFinalTwo One"
                                      />
                                      <Img
                                        src="defaultNoData.png"
                                        className="absolute h-[32px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[32px]"
                                        alt="Fidenza978ToyFace One"
                                      />
                                    </div>
                                  </div>
                                  <div className="bg-gray_51 h-[32px] md:h-[55px] mt-[35px] p-[6px] relative rounded-[50%] w-[32px]">
                                    <Img
                                      src="images/img_buttonprimary_7.svg"
                                      className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                                      alt="morevertical One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col items-start justify-start mt-[5px] w-[100%]">
                                <div className="flex flex-col gap-[17px] items-start justify-start md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Plan for 2022
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-left"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Introduction about LD
                                    <br />
                                    Project in detail
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[24px] items-start justify-start mt-[24px] w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Process (0%)
                                  </Text>
                                  <Img
                                    src="images/img_frame_1X194.svg"
                                    className="h-[1px] w-[auto]"
                                    alt="Frame Two"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between mt-[28px] w-[100%]">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-[40%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Members
                                    </Text>
                                    <Img
                                      src="defaultNoData.png"
                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                      alt="TinTinTwentyTwo"
                                    />
                                  </div>
                                  <div className="bg-gray_51 h-[32px] md:h-[55px] mt-[35px] p-[6px] relative rounded-[50%] w-[32px]">
                                    <Img
                                      src="images/img_buttonprimary_7.svg"
                                      className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                                      alt="morevertical Two"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TracktasksPage;
