import React from "react";

import { Img, Text, Line, Input } from "components";
import { CloseSVG } from "../../assets/images";

const EKYCIntroductionStepThreePage = () => {
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
                <div className="bg-white_A700 flex flex-col gap-[58px] items-center justify-start p-[80px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Introduction
                  </Text>
                  <div className="flex flex-col gap-[20px] items-center justify-start mb-[60px] md:w-[100%] w-[46%]">
                    <div className="border-[1px] border-indigo_51 border-solid flex flex-row items-center justify-between p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <div className="flex flex-col items-end justify-start my-[3px] outline outline-[0.9px] outline-bluegray_900 rounded-[2px] md:w-[100%] w-[90%]">
                            <Img
                              src="images/img_vector415_bluegray_900.svg"
                              className="h-[1px] mt-[2px] w-[auto]"
                              alt="Vector415"
                            />
                            <div className="flex flex-row items-start justify-evenly mr-[3px] md:w-[100%] w-[76%]">
                              <Img
                                src="images/img_01navigation_9X9.svg"
                                className="h-[9px] w-[9px]"
                                alt="01navigation"
                              />
                              <Img
                                src="images/img_vector415_bluegray_900.svg"
                                className="h-[1px] w-[auto]"
                                alt="Vector416"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 1:
                          </Text>
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Scan ID Card
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_checkcircle.svg"
                        className="h-[24px] mr-[7px] w-[24px]"
                        alt="checkcircle"
                      />
                    </div>
                    <div className="border-[1px] border-indigo_51 border-solid flex flex-row items-center justify-between p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                        <div
                          className="bg-cover bg-no-repeat md:h-[26px] h-[28px] relative w-[28px]"
                          style={{
                            backgroundImage:
                              "url('images/img_group_28X28.svg')",
                          }}
                        >
                          <Img
                            src="images/img_group_26X26.svg"
                            className="absolute h-[26px] inset-[0] justify-center m-[auto] w-[26px]"
                            alt="Group One"
                          />
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 2:
                          </Text>
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Scan Face
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_checkcircle.svg"
                        className="h-[24px] mr-[7px] w-[24px]"
                        alt="checkcircle One"
                      />
                    </div>
                    <div className="bg-white_A700 flex flex-row items-center justify-between p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                      <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start ml-[7px] rounded-[4px] w-[55%]">
                        <div className="md:h-[28px] h-[30px] relative w-[13%]">
                          <Img
                            src="images/img_02essential_28X24.svg"
                            className="absolute h-[28px] left-[0] top-[0] w-[auto]"
                            alt="02essential"
                          />
                          <div className="absolute bottom-[0] flex h-[16px] items-center justify-start right-[0] w-[16px]">
                            <div className="bg-white_A700 h-[13px] md:h-[9px] outline outline-[0.9px] outline-deep_orange_300 p-[2px] relative rounded-[6px] w-[13px]">
                              <Img
                                src="images/img_02essential_1.svg"
                                className="absolute h-[9px] inset-[0] justify-center m-[auto] w-[9px]"
                                alt="02essential One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 3:
                          </Text>
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Confirm Information
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 h-[24px] md:h-[42px] mr-[7px] my-[13px] p-[4px] relative rounded-[4px] w-[24px]">
                        <Img
                          src="images/img_arrowright_bluegray_900.svg"
                          className="absolute h-[16px] inset-[0] justify-center m-[auto] w-[16px]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <div className="border-[1px] border-indigo_51 border-solid flex flex-row items-center justify-between p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                        <Img
                          src="images/img_02essential_28X28.svg"
                          className="h-[28px] w-[28px]"
                          alt="02essential Two"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 4:
                          </Text>
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Signature
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_lock.svg"
                        className="h-[24px] mr-[7px] w-[24px]"
                        alt="lock"
                      />
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

export default EKYCIntroductionStepThreePage;
