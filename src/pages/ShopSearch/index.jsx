import React from "react";

import {
  Img,
  Text,
  Line,
  Input,
  SelectBox,
  SeekBar,
  CheckBox,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images";

const ShopSearchPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

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
              <div className="flex flex-col items-start justify-start mb-[1007px] md:w-[100%] w-[87%]">
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
          <Line className="bg-indigo_51 h-[1538px] md:h-[1px] md:w-[100%] w-[1px]" />
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
                  name="frame"
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
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between mb-[25px] mt-[16px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[24%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Shopping centre
                  </Text>
                  <div className="flex font-inter h-[1050px] justify-end relative w-[100%]">
                    <div className="flex flex-col gap-[11px] h-[100%] items-start justify-start mb-[247px] mt-[auto] mx-[auto] pr-[4px] pt-[4px] w-[auto]">
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
                    <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-start justify-start mt-[8px] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Categories
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[34px] w-[100%]">
                          <div className="flex flex-col gap-[22px] items-start justify-start w-[100%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Clothes
                              </Text>
                              <Img
                                src="images/img_chevronup.svg"
                                className="h-[20px] w-[20px]"
                                alt="chevronup"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start p-[3px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-medium md:ml-[0] ml-[5px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                T-shirts
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] ml-[5px] mt-[24px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jeans
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] ml-[5px] mt-[24px] text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jackets
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-indigo_51 h-[1px] mt-[20px] w-[100%]" />
                          <SelectBox
                            className="font-medium mt-[21px] text-[16px] text-bluegray_800 text-left w-[100%]"
                            placeholderClassName="text-bluegray_800"
                            name="Frame One"
                            placeholder="Hats"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[20px] mr-[0] w-[20px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                          <Line className="bg-indigo_51 h-[1px] mt-[22px] w-[100%]" />
                          <SelectBox
                            className="font-medium mt-[21px] text-[16px] text-bluegray_800 text-left w-[100%]"
                            placeholderClassName="text-bluegray_800"
                            name="Frame Two"
                            placeholder="Shoes"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[20px] mr-[0] w-[20px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                          <Line className="bg-indigo_51 h-[1px] mt-[22px] w-[100%]" />
                          <SelectBox
                            className="font-medium mt-[21px] text-[16px] text-bluegray_800 text-left w-[100%]"
                            placeholderClassName="text-bluegray_800"
                            name="Frame Three"
                            placeholder="Other accessories"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[20px] mr-[0] w-[20px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                          <Line className="bg-indigo_51 h-[1px] mt-[22px] w-[100%]" />
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start mt-[23px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Price
                          </Text>
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                            <SeekBar
                              inputValue={[null]}
                              trackColors={["", "#e2e8ed"]}
                              thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                              className="flex h-[14px] w-[100%]"
                              trackClassName="h-[4px] flex w-[100%]"
                            />{" "}
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-medium h-[16px] text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                $0
                              </Text>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                $10,000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-medium mt-[25px] text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Rating
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="5 Stars"
                            name="Remember"
                          ></CheckBox>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame Four"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="4 Stars"
                            name="Remember One"
                          ></CheckBox>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame Five"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="3 Stars"
                            name="Remember Two"
                          ></CheckBox>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame Six"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="2 Stars"
                            name="Remember Three"
                          ></CheckBox>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame Seven"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="1 Star"
                            name="Remember Four"
                          ></CheckBox>
                          <Img
                            src="defaultNoData.png"
                            className="h-[11px] md:h-[auto] object-cover w-[12px]"
                            alt="Vector One"
                          />
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start mt-[24px] md:w-[100%] w-[73%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Color
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_icon_bluegray_400.svg"
                              className="h-[24px] w-[24px]"
                              alt="Icon Seven"
                            />
                            <div className="bg-light_blue_A700 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                              <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                            </div>
                            <div className="bg-pink_400 h-[24px] rounded-[50%] w-[24px]"></div>
                            <div className="bg-amber_302 h-[24px] rounded-[50%] w-[24px]"></div>
                            <div className="bg-pink_A100 h-[24px] rounded-[50%] w-[24px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-center justify-start mt-[32px] w-[100%]">
                          <Button
                            className="bg-deep_orange_300 flex items-center justify-center md:pl-[40px] pl-[50px] pr-[35px] py-[9px] rounded-[24px] sm:px-[20px] text-center"
                            rightIcon={
                              <Img
                                src="images/img_plus.svg"
                                className="ml-[15px] text-center"
                                alt="plus"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-left text-white_A700">
                              Apply filter
                            </div>
                          </Button>
                          <div className="bg-gray_51 flex flex-row gap-[10px] h-[48px] md:h-[auto] items-center justify-between sm:px-[20px] md:px-[40px] px-[54px] py-[9px] rounded-[24px] w-[210px]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Clear all
                            </Text>
                            <Img
                              src="images/img_trash2.svg"
                              className="h-[20px] w-[20px]"
                              alt="trashTwo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-[0] mt-[56px] md:w-[100%] w-[75%]">
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex pb-[16px] pl-[32px] pr-[22px] pt-[21px] rounded-[4px] shadow-bs sm:px-[20px] w-[100%]"
                    name="frame Eight"
                    placeholder="Seach name, type,..."
                    prefix={
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer mr-[16px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                          color="#828fa2"
                        />
                      ) : inputvalue1?.length > 0 ? (
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
                  <div className="h-[1186px] md:h-[2403px] sm:h-[3585px] mt-[19px] relative w-[100%]">
                    <div className="absolute bg-white_A700 h-[308px] inset-x-[0] mx-[auto] rounded-[4px] shadow-bs top-[1%] w-[32%]"></div>
                    <div className="bg-white_A700 h-[308px] ml-[auto] mt-[9px] rounded-[4px] shadow-bs w-[32%]"></div>
                    <div className="absolute gap-[0] md:gap-[20px] grid grid-cols-1 inset-[0] justify-center m-[auto] min-h-[auto] w-[100%]">
                      <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
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
                                  alt="Frame Eleven"
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
                                  alt="Frame One"
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
                                    alt="ButtonPrimary Three"
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
                                  alt="Frame Two"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button className="bg-deep_orange_300 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Four"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Five"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
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
                                <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                                  <Text
                                    className="font-medium md:ml-[0] ml-[14px] text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Polo Shirt
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
                                  alt="Frame Twelve"
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
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                          <div className="h-[353px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                              alt="3427408800611 One One"
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
                                    Bomber
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
                                  alt="Frame One One"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button className="bg-deep_orange_300 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Two One"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Three One"
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
                              alt="3427408800611 Two One"
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
                                  alt="Frame Two One"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button className="bg-deep_orange_300 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Four One"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Five One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-center mt-[41px] md:w-[100%] w-[28%]">
                    <div className="border-[1px] border-indigo_51 border-solid md:h-[20px] h-[32px] p-[6px] relative w-[32px]">
                      <Img
                        src="images/img_chevronleft_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                        alt="chevronleft"
                      />
                    </div>
                    <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-medium h-[32px] py-[9px] text-[14px] text-bluegray_900 text-center w-[32px]">
                      1
                    </Button>
                    <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] py-[9px] text-[14px] text-bluegray_800 text-center w-[32px]">
                      2
                    </Button>
                    <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] py-[9px] text-[14px] text-bluegray_800 text-center w-[32px]">
                      ...
                    </Button>
                    <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] py-[8px] text-[14px] text-bluegray_800 text-center w-[32px]">
                      9
                    </Button>
                    <div className="border-[1px] border-indigo_51 border-solid md:h-[20px] h-[32px] p-[6px] relative rotate-[180deg] w-[32px]">
                      <Img
                        src="images/img_chevronright.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[20px]"
                        alt="chevronright"
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

export default ShopSearchPage;
