import React from "react";

import {
  Img,
  Text,
  ReactTable,
  Line,
  CheckBox,
  Input,
  Button,
} from "components";
import { createColumnHelper } from "@tanstack/react-table";
import { CloseSVG } from "../../assets/images";

const CartProductListPage = () => {
  const tableData4 = React.useRef([
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
  ]);
  const columnHelper4 = createColumnHelper();
  const column4 = [
    columnHelper4.accessor("rowproduct", {
      cell: (info) => (
        <CheckBox
          className="h-[16px] sm:mt-[0] mt-[34px]"
          inputClassName="h-[undefinedpx] mr-[5px] mt-[34px] sm:mt-[0]"
          name="vector One"
        ></CheckBox>
      ),
      header: (info) => (
        <div className="flex items-center justify-center min-w-[132px] pl-[3px] py-[3px] w-[19%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Product
          </Text>
        </div>
      ),
    }),
    columnHelper4.accessor("rowprice", {
      cell: (info) => (
        <div className="flex flex-row gap-[24px] items-start justify-center sm:ml-[0] ml-[33px]">
          <Img
            src="defaultNoData.png"
            className="h-[86px] md:h-[auto] object-cover w-[35%]"
            alt="Rectangle"
          />
          <div className="flex flex-col gap-[19px] items-start justify-start pr-[5px] pt-[5px] w-[auto]">
            <Text
              className="font-bold text-bluegray_900 text-left w-[auto]"
              as="p"
              variant="h4"
            >
              Polo Shirt
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
              as="p"
              variant="h6"
            >
              {info?.getValue()}
            </Text>
          </div>
        </div>
      ),
      header: (info) => (
        <div className="flex items-center justify-center min-w-[39px] py-[3px] w-[6%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Price
          </Text>
        </div>
      ),
    }),
    columnHelper4.accessor("rowquantity", {
      cell: (info) => (
        <Text
          className="font-semibold sm:mt-[0] mt-[3px] text-bluegray_800 text-left"
          as="p"
          variant="h6"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex items-center justify-start min-w-[65px] w-[10%]">
          <Text
            className="font-normal mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Quantity
          </Text>
        </div>
      ),
    }),
    columnHelper4.accessor("rowtotal", {
      cell: (info) => (
        <div className="flex flex-row items-center justify-center sm:ml-[0] ml-[66px]">
          <div className="border-[1px] border-indigo_51 border-solid h-[32px] w-[32px]"></div>
          <Text
            className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
            as="p"
            variant="h6"
          >
            1
          </Text>
          <div className="border-[1px] border-indigo_51 border-solid md:h-[13px] h-[32px] ml-[21px] p-[9px] relative w-[32px]">
            <Img
              src={info?.getValue()}
              className="absolute h-[13px] inset-[0] justify-center m-[auto] w-[13px]"
              alt="Vector Two"
            />
          </div>
        </div>
      ),
      header: (info) => (
        <div className="flex items-center justify-center min-w-[90px] pr-[3px] py-[3px] w-[13%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Total
          </Text>
        </div>
      ),
    }),
  ];

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
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
        <div className="flex-1 h-[1071px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-gray_51 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[35px] items-center justify-start mt-[14px] w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <Text
                  className="font-poppins mb-[2px] text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Cart
                </Text>
                <Text
                  className="font-inter font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-bluegray_400 text-[16px]">
                    Ecommerce/
                  </span>
                  <span className="text-bluegray_800 text-[16px]"> Cart</span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-[40px] items-start justify-end p-[24px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[67%]">
                  <Text
                    className="font-bold md:ml-[0] ml-[8px] mt-[13px] text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Product List
                  </Text>
                  <div className="overflow-auto md:ml-[0] ml-[8px] w-[98%]">
                    <ReactTable
                      columns={column4}
                      data={tableData4.current}
                      rowClass={"bg-white_A700"}
                      headerClass=""
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[33%]">
                  <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start mt-[3px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Promotion
                      </Text>
                      <Input
                        className="font-normal not-italic pl-[20px] pr-[12px] py-[19px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                        wrapClassName="bg-white_A700 border-[1px] border-indigo_51 border-solid rounded-[4px] w-[100%]"
                        name="Group2329"
                        placeholder="Enter code"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-center md:w-[100%] w-[70%]">
                      <Img
                        src="images/img_tag.svg"
                        className="h-[20px] w-[20px]"
                        alt="tag"
                      />
                      <Text
                        className="font-medium mr-[27px] text-indigo_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Click to find Promotion
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                      <div className="flex flex-col gap-[25px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Price
                          </Text>
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $120.0
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Shipping fee
                          </Text>
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $0
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[64px] w-[100%]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total
                        </Text>
                        <Text
                          className="font-bold mt-[4px] text-bluegray_800 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $120.0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[32px] w-[100%]">
                        <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[306px] py-[17px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                          Purchase now
                        </Button>
                        <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[306px] py-[17px] rounded-[24px] text-[14px] text-bluegray_800 text-center w-[auto]">
                          Scan QR code
                        </Button>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[32px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[98%]"
                        as="h6"
                        variant="h6"
                      >
                        By clicking “Purchase” button, I agree with RiriBa Term
                        and Policy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute bg-white_A700 flex inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[96%]">
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
          <Line className="absolute bg-indigo_51 h-[1071px] inset-y-[0] left-[0] my-[auto] w-[1px]" />
        </div>
      </div>
    </>
  );
};

export default CartProductListPage;
