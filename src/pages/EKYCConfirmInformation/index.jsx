import React from "react";

import { Img, Text, Line, Input, CheckBox, Button } from "components";
import { CloseSVG } from "../../assets/images";

const EKYCConfirmInformationPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[422px] md:w-[100%] w-[87%]">
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
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1px] h-[953px] md:w-[100%] w-[1px]" />
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
              <div className="flex flex-col gap-[35px] items-center justify-start mt-[15px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[2px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Setting/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[48px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[21px] justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="md:ml-[0] ml-[25px] text-bluegray_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Confirm Information
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[36px] md:w-[100%] w-[67%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-bluegray_800 text-[14px] font-inter">
                          Full name{" "}
                        </span>
                        <span className="text-red_600 text-[14px] font-inter">
                          *
                        </span>
                      </Text>
                      <Input
                        className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                        wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                        name="group18068"
                        placeholder="Mustermann Galer"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start mt-[27px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-bluegray_800 text-[14px] font-inter">
                          ID number{" "}
                        </span>
                        <span className="text-red_600 text-[14px] font-inter">
                          *
                        </span>
                      </Text>
                      <Input
                        className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                        wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                        name="group18068 One"
                        placeholder="L01X00T47"
                      ></Input>
                    </div>
                    <div className="md:gap-[20px] gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[27px] w-[100%]">
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-bluegray_800 text-[14px] font-inter">
                            Gender{" "}
                          </span>
                          <span className="text-red_600 text-[14px] font-inter">
                            *
                          </span>
                        </Text>
                        <Input
                          className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="gender One"
                          placeholder="Female"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-bluegray_800 text-[14px] font-inter">
                            Nationality{" "}
                          </span>
                          <span className="text-red_600 text-[14px] font-inter">
                            *
                          </span>
                        </Text>
                        <Input
                          className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="group18068 Two"
                          placeholder="Deitsch"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-bluegray_800 text-[14px] font-inter">
                            Date of birth{" "}
                          </span>
                          <span className="text-red_600 text-[14px] font-inter">
                            *
                          </span>
                        </Text>
                        <Input
                          className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="group18068 Three"
                          placeholder="12.08.1983"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-bluegray_800 text-[14px] font-inter">
                            Place of birth{" "}
                          </span>
                          <span className="text-red_600 text-[14px] font-inter">
                            *
                          </span>
                        </Text>
                        <Input
                          className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="group18068 Four"
                          placeholder="Berlin"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <CheckBox
                    className="font-normal mt-[48px] not-italic text-[14px] text-bluegray_400 text-left"
                    inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                    label='By clicking button “Confirm", I take all responsibility of the information above'
                    name="Remember"
                  ></CheckBox>
                  <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[270px] mt-[39px] py-[17px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCConfirmInformationPage;
