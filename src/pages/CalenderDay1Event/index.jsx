import React from "react";

import {
  Img,
  Text,
  Line,
  Input,
  Button,
  RadioGroup,
  Radio,
  List,
} from "components";
import { CloseSVG } from "../../assets/images";

const CalenderDay1EventPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[419px] md:w-[100%] w-[87%]">
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
                    src="images/img_icon_13.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Four"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
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
          <Line className="bg-indigo_51 md:h-[1px] h-[950px] md:w-[100%] w-[1px]" />
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
            <div className="bg-gray_51 flex font-poppins items-center justify-end p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[38px] items-start justify-start mt-[14px] w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Calendar
                </Text>
                <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                    <div className="flex flex-col items-start justify-start mb-[8px] w-[100%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-bluegray_400 text-left w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Click in the calendar to create event
                        </Text>
                        <Button
                          className="bg-deep_orange_300 flex items-center justify-center pl-[30px] pr-[35px] py-[17px] rounded-[24px] sm:px-[20px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="ml-[4px] text-center"
                              alt="plus"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-left text-white_A700">
                            Create new event
                          </div>
                        </Button>
                      </div>
                      <RadioGroup
                        className="mt-[32px] w-[62%]"
                        name="radiogroupprofileviews one"
                      >
                        <Radio
                          value="NewEvent"
                          className="font-medium mr-[30px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="bg-green_700 h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="New Event"
                        ></Radio>
                        <Radio
                          value="MyEventOnly"
                          className="font-medium mr-[2px] mt-[25px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="bg-indigo_400 h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="My Event Only"
                        ></Radio>
                        <Radio
                          value="Meeting"
                          className="font-medium mr-[50px] mt-[20px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="bg-amber_300 h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="Meeting"
                        ></Radio>
                        <Radio
                          value="Error"
                          className="font-medium mb-[5px] mr-[75px] mt-[20px] text-[16px] text-bluegray_800 text-left"
                          inputClassName="bg-red_600 h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="Error"
                        ></Radio>
                      </RadioGroup>
                      <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                      <Text
                        className="font-normal mt-[31px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Team members
                      </Text>
                      <List
                        className="flex-col grid items-center mt-[38px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            🚗
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Avo
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-[36px] py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Lead design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ⚽
                          </Text>
                          <Text
                            className="font-medium mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nhun
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            👑
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Riri
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-[40px] py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ✈
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Juki
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-[34px] py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            💣
                          </Text>
                          <Text
                            className="font-medium ml-[8px] mt-[2px] text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nobi
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-[29px] py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                      </List>
                      <div className="flex flex-row gap-[8px] items-start justify-start mt-[32px] md:w-[100%] w-[63%]">
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="h-[24px] w-[24px]"
                          alt="plus One"
                        />
                        <Text
                          className="font-normal not-italic text-deep_orange_300 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Add member
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[75%]">
                    <div className="flex flex-col gap-[30px] items-center justify-start mb-[6px] md:w-[100%] w-[99%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row gap-[34px] items-end justify-between sm:w-[100%] w-[42%]">
                          <Text
                            className="mb-[4px] mt-[10px] text-bluegray_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            <span className="md:text-[22px] sm:text-[20px] text-bluegray_900 text-[24px] font-inter font-bold">
                              24{" "}
                            </span>
                            <span className="md:text-[22px] sm:text-[20px] text-bluegray_900 text-[24px] font-inter font-bold">
                              January{" "}
                            </span>
                            <span className="md:text-[22px] sm:text-[20px] text-indigo_400 text-[24px] font-inter font-bold">
                              2022
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[16px] items-center justify-between w-[30%]">
                            <Button className="bg-gray_51 flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_buttonprimary_5.svg"
                                className="h-[20px]"
                                alt="ButtonPrimary"
                              />
                            </Button>
                            <Button className="bg-gray_51 flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_arrowright.svg"
                                className="h-[20px]"
                                alt="arrowright"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[31%]">
                          <Button className="bg-bluegray_900 cursor-pointer font-semibold px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-white_A700 w-[75px]">
                            Day
                          </Button>
                          <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-semibold px-[16px] py-[9px] rounded-[20px] text-[14px] text-bluegray_800 text-center w-[75px]">
                            Week
                          </Button>
                          <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-semibold px-[16px] py-[9px] rounded-[20px] text-[14px] text-bluegray_800 text-center w-[75px]">
                            Month
                          </Button>
                        </div>
                      </div>
                      <div className="h-[642px] relative w-[100%]">
                        <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-semibold mb-[-1px] md:min-w-[100%] min-w-[794px] mx-[auto] py-[12px] text-[16px] text-bluegray_800 text-center w-[auto] z-[1]">
                          Friday
                        </Button>
                        <div className="border-[1px] border-indigo_51 border-solid flex items-center justify-start mt-[auto] mx-[auto] p-[4px] w-[100%]">
                          <div className="bg-indigo_400 flex flex-row items-start justify-start mb-[556px] p-[4px] rounded-[4px] w-[100%]">
                            <Img
                              src="images/img_oval.svg"
                              className="h-[8px] ml-[12px] mt-[7px] w-[auto]"
                              alt="Oval"
                            />
                            <Text
                              className="font-medium ml-[13px] text-left text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              8:10 am
                            </Text>
                            <Text
                              className="font-semibold mb-[4px] ml-[9px] text-left text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Daily meeting with SEO
                            </Text>
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
      </div>
    </>
  );
};

export default CalenderDay1EventPage;
