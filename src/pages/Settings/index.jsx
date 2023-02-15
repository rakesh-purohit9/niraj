import React from "react";

import { Img, Text, Line, Input, Switch, SelectBox, Button } from "components";
import { CloseSVG } from "../../assets/images";

const SettingsPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[339px] md:w-[100%] w-[87%]">
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
          <Line className="bg-indigo_51 md:h-[1px] h-[870px] md:w-[100%] w-[1px]" />
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
              <div className="flex md:flex-col flex-row gap-[19px] items-end justify-between mt-[16px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[67%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Settings
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter gap-[35px] items-start justify-start mt-[32px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Account info.
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-bluegray_900 text-[14px] font-inter">
                          Verify your information to proctect your account.{" "}
                        </span>
                        <span className="text-deep_orange_300 text-[14px] font-inter font-semibold">
                          Verify now
                        </span>
                      </Text>
                    </div>
                    <div className="gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Username
                        </Text>
                        <Input
                          className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="Group2524"
                          placeholder="Sam"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Email address
                        </Text>
                        <Input
                          className="font-semibold pb-[16px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[21px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="email"
                          placeholder="sambrown@gmail.com"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          First name
                        </Text>
                        <Input
                          className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="Group2526"
                          placeholder="Sam"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Last name
                        </Text>
                        <Input
                          className="font-semibold pl-[20px] sm:pr-[20px] pr-[35px] py-[19px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="Group2527"
                          placeholder="Brown"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[21px] items-center justify-between mt-[20px] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[37px] items-start justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[49%]">
                      <div className="flex items-center justify-end pr-[4px] py-[4px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Password Reset
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Current password
                          </Text>
                          <Input
                            className="font-semibold pb-[22px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[17px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                            type="password"
                            name="password"
                            placeholder="************"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            New password
                          </Text>
                          <Input
                            className="font-semibold pb-[22px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[17px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                            type="password"
                            name="password One"
                            placeholder="************"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[49%]">
                      <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Notifications
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Open notification to receive our news fastly
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-center justify-start mt-[42px] md:w-[100%] w-[84%]">
                        <Switch value={true} className="w-[19%]" />
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send notification to mail
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-end justify-start mt-[32px] md:w-[100%] w-[75%]">
                        <Switch value={true} className="w-[21%]" />
                        <Text
                          className="font-normal mt-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send new promotion
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-end justify-start mb-[20px] mt-[32px] md:w-[100%] w-[70%]">
                        <Switch value={false} className="w-[23%]" />
                        <Text
                          className="font-normal mt-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Notice my balance
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-start justify-start md:mt-[0] mt-[56px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[33%]">
                  <div className="flex items-start justify-end md:w-[100%] w-[auto]">
                    <Text
                      className="font-bold mt-[7px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Payment
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start mt-[32px] w-[100%]">
                    <SelectBox
                      className="font-semibold pb-[16px] pl-[20px] pt-[21px] text-[16px] text-bluegray_800 text-left w-[100%]"
                      placeholderClassName="text-bluegray_800"
                      name="group One"
                      placeholder="Paypal"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[20px] mr-[0] pl-[35px] pr-[20px] sm:pl-[20px] border-indigo_51 border-[1px] border-solid w-[20px] rounded-[4px] py-[18px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <div className="bg-indigo_400 flex flex-row items-start justify-between pt-[6px] rounded-[4px] w-[100%]">
                      <div className="md:h-[177px] h-[83px] mt-[94px] relative w-[60%]">
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
                          alt="Group Two"
                        />
                      </div>
                      <div className="h-[161px] md:h-[177px] mb-[16px] relative w-[26%]">
                        <Img
                          src="images/img_group_12X40.svg"
                          className="h-[12px] mt-[13px] mx-[auto] rounded-[4px] w-[auto]"
                          alt="Group Three"
                        />
                        <Img
                          src="defaultNoData.png"
                          className="absolute h-[161px] inset-[0] justify-center m-[auto] object-cover rounded-[4px] w-[auto]"
                          alt="Group Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start mt-[37px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Type your email
                    </Text>
                    <Input
                      className="font-medium pb-[16px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[21px] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                      type="email"
                      name="email One"
                      placeholder="Ackermanlhn@gmail.com"
                    ></Input>
                  </div>
                  <Text
                    className="font-normal leading-[22.00px] md:ml-[0] ml-[45px] mt-[32px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[70%]"
                    as="h6"
                    variant="h6"
                  >
                    Please make sure that all your information precisely
                  </Text>
                  <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[306px] mt-[60px] py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                    Save change
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

export default SettingsPage;
