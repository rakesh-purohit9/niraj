import React from "react";

import {
  Img,
  Text,
  Line,
  Input,
  SelectBox,
  TextArea,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images";

const AddProductPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[540px] md:w-[100%] w-[87%]">
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
                    src="images/img_icon_21.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon Six"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
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
          <Line className="bg-indigo_51 h-[1071px] md:h-[1px] md:w-[100%] w-[1px]" />
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
                  wrapClassName="bg-gray_51 flex md:ml-[0] md:w-[100%] ml-[227px] pl-[16px] pr-[22px] py-[13px] rounded-[4px] sm:hidden sm:pr-[20px] sm:w-[100%] w-[38%]"
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
            <div className="bg-gray_51 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start my-[13px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Add Product
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Ecommerce/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Add Product
                    </span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-center justify-end mt-[35px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col items-start justify-start mt-[5px] w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Basic information
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-[40px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:w-[100%] w-[57%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product name
                        </Text>
                        <Input
                          className="font-normal not-italic pb-[16px] pl-[20px] pr-[12px] pt-[21px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          type="text"
                          name="Group2322"
                          placeholder="Enter product’s name"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] w-[39%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Select category
                        </Text>
                        <SelectBox
                          className="bg-white_A700 border-[1px] border-indigo_51 border-solid font-semibold pb-[16px] pl-[20px] pt-[21px] rounded-[4px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="group18058"
                          placeholder="Data project"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[6px] mr-[24px] w-[11px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-[28px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[27px] items-center justify-start md:w-[100%] w-[57%]">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Branch
                          </Text>
                          <Input
                            className="font-normal not-italic pl-[20px] pr-[12px] py-[19px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                            name="Group2323"
                            placeholder="Enter brach"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Price
                          </Text>
                          <Input
                            className="font-normal not-italic pl-[20px] pr-[12px] py-[19px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                            name="Group2324"
                            placeholder="Enter brach"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] w-[39%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product description
                        </Text>
                        <TextArea
                          className="bg-white_A700 border-[1px] border-indigo_51 border-solid font-normal not-italic pb-[35px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[21px] rounded-[4px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="Group2325"
                          placeholder="Write something..."
                        ></TextArea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-start justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                    <Text
                      className="font-bold mt-[7px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Product image
                    </Text>
                    <div className="border-[2px] border-dashed border-indigo_51 flex items-center justify-end p-[87px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                      <div className="flex flex-col gap-[40px] items-center justify-start mt-[10px] md:w-[100%] w-[67%]">
                        <Img
                          src="images/img_image_bluegray_900.svg"
                          className="h-[28px] w-[28px]"
                          alt="image"
                        />
                        <div className="flex flex-col gap-[13px] items-center justify-end pt-[5px] px-[5px] w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Upload image
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Drag or click to upload image
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col justify-end p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                    <Text
                      className="font-bold md:ml-[0] ml-[6px] mr-[435px] mt-[11px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Add link
                    </Text>
                    <div className="flex flex-col gap-[29px] items-center justify-start mr-[6px] mt-[40px] md:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product Link
                        </Text>
                        <Input
                          className="font-normal not-italic pl-[20px] pr-[12px] py-[19px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="Group2326"
                          placeholder="Enter link"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Hashtag
                        </Text>
                        <Input
                          className="font-normal not-italic pb-[16px] pl-[20px] pr-[12px] pt-[21px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                          name="Group2327"
                          placeholder="Enter tag"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end mb-[6px] md:ml-[0] ml-[195px] mr-[6px] mt-[62px] md:w-[100%] w-[61%]">
                      <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[148px] py-[16px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                        Save
                      </Button>
                      <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[148px] py-[16px] rounded-[24px] text-[14px] text-bluegray_800 text-center w-[auto]">
                        Cancel
                      </Button>
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

export default AddProductPage;
