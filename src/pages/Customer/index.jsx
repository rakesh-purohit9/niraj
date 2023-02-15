import React from "react";

import {
  Img,
  Text,
  Line,
  Input,
  ReactTable,
  List,
  CheckBox,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images";
import { createColumnHelper } from "@tanstack/react-table";

const CustomerPage = () => {
  const tableData3 = React.useRef([
    {
      rowcustomertwo: "Jack",
      rowaddress: "2371 Reppert Coal Road",
      rowphone: "601-540-6298",
      roworderno: "#12931",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Fort Myers",
      rowaddress: "927 Sunburst Drive",
      rowphone: "239-346-5244",
      roworderno: "#12932",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Benjamin",
      rowaddress: "1671 Carriage Court",
      rowphone: "760-390-1331",
      roworderno: "#12933",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Flanagan",
      rowaddress: "121 Courtright Street",
      rowphone: "701-565-0439",
      roworderno: "#12934",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Nicoletti",
      rowaddress: "1060 Stark Hollow Road",
      rowphone: " 970-757-0036",
      roworderno: "#12935",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Robert",
      rowaddress: "424 Charter Street",
      rowphone: "913-207-2627",
      roworderno: "#12936",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Rankin",
      rowaddress: "60 Corpening Drive",
      rowphone: "248-930-4978",
      roworderno: "#12937",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Clementine",
      rowaddress: "4337 Fleming Way",
      rowphone: "757-735-4769",
      roworderno: "#12938",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Mitchell",
      rowaddress: "2758 My Drive",
      rowphone: "631-827-7596",
      roworderno: "#12939",
      rowstatus: "images/img_morehorizontal.svg",
    },
  ]);
  const columnHelper3 = createColumnHelper();
  const column3 = [
    columnHelper3.accessor("rowcustomertwo", {
      cell: (info) => (
        <div className="flex flex-row gap-[57px] items-start justify-start p-[3px]">
          <CheckBox
            className="h-[16px] ml-[18px] mt-[36px]"
            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
            name="vectorstroke"
          ></CheckBox>
          <div className="flex flex-row gap-[12px] items-center justify-center mt-[32px] pr-[3px] w-[29%]">
            <Img
              src="defaultNoData.png"
              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
              alt="RobotoToyFaceFinalTwo"
            />
            <Text
              className="font-medium text-bluegray_800 text-left w-[auto]"
              as="p"
              variant="h5"
            >
              {info?.getValue()}
            </Text>
          </div>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[273px] p-[3px] md:w-[100%] w-[26%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Customer
          </Text>
        </div>
      ),
    }),
    columnHelper3.accessor("rowaddress", {
      cell: (info) => (
        <div className="flex items-center justify-center pr-[3px] py-[3px]">
          <Text
            className="font-medium mt-[38px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[260px] pr-[3px] py-[3px] md:w-[100%] w-[24%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Address
          </Text>
        </div>
      ),
    }),
    columnHelper3.accessor("rowphone", {
      cell: (info) => (
        <div className="flex items-center justify-center pr-[7px] py-[7px]">
          <Text
            className="font-medium mt-[32px] text-indigo_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[203px] pr-[3px] py-[3px] md:w-[100%] w-[19%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Phone
          </Text>
        </div>
      ),
    }),
    columnHelper3.accessor("roworderno", {
      cell: (info) => (
        <div className="flex items-center justify-center pr-[7px] py-[7px]">
          <Text
            className="font-medium mt-[32px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[154px] pr-[3px] py-[3px] md:w-[100%] w-[15%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Order No.
          </Text>
        </div>
      ),
    }),
    columnHelper3.accessor("rowstatus", {
      cell: (info) => (
        <div className="flex flex-row items-start justify-between">
          <Button className="bg-green_700 cursor-pointer font-medium min-w-[93px] mt-[32px] py-[7px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
            Paid
          </Button>
          <Img
            src={info?.getValue()}
            className="h-[24px] mr-[19px] mt-[35px] w-[24px]"
            alt="morevertical"
          />
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[196px] pr-[3px] py-[3px] md:w-[100%] w-[19%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Status
          </Text>
        </div>
      ),
    }),
  ];

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-white_A700 flex items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
            <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[240px]">
              <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[28px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="h-[28px] mt-[8px] w-[auto]"
                  alt="Logo"
                />
                <div className="flex flex-col items-start justify-start mb-[460px] md:w-[100%] w-[86%]">
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
                      src="images/img_icon_14.svg"
                      className="h-[20px] w-[20px]"
                      alt="Icon One"
                    />
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
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
            <Line className="bg-indigo_51 md:h-[1px] h-[750px] mb-[240px] md:w-[100%] w-[1px]" />
            <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
              <header className="bg-white_A700 flex items-center justify-center w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] h-[] items-center justify-center mx-[auto] my-[10px] w-[97%] sdfds">
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
                    className="font-medium sm:hidden p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%] mx"
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
                    style={{
                      backgroundImage: "url('images/img_group2427.svg')",
                    }}
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
              <div className="bg-gray_51 flex flex-col font-poppins gap-[37px] items-start justify-end p-[23px] sm:px-[20px] w-[100%]">
                <Text
                  className="mt-[15px] text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Customer
                </Text>
                <div className="bg-white_A700 flex font-inter items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[3px] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start w-[100%]">
                      <Text
                        className="font-bold md:mt-[0] mt-[5px] text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Customer List
                      </Text>
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="h-[24px] md:ml-[0] ml-[891px] w-[24px]"
                        alt="search"
                      />
                      <Img
                        src="images/img_plus_1.svg"
                        className="h-[24px] md:ml-[0] ml-[24px] w-[24px]"
                        alt="plus"
                      />
                    </div>
                    <div className="overflow-auto mt-[39px] w-[100%]">
                      <ReactTable
                        columns={column3}
                        data={tableData3.current}
                        rowClass={""}
                        headerClass=""
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[32px] w-[100%]">
                      <div className="border-[1px] border-indigo_51 border-solid h-[32px] w-[32px]"></div>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] py-[9px] text-[14px] text-bluegray_900 text-center w-[32px]">
                        1
                      </Button>
                      <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] py-[9px] text-[14px] text-bluegray_800 text-center w-[32px]">
                        2
                      </Button>
                      <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] py-[9px] text-[14px] text-bluegray_800 text-center w-[32px]">
                        ...
                      </Button>
                      <Button className="border-[1px] border-indigo_51 border-solid cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] py-[9px] text-[14px] text-bluegray_800 text-center w-[32px]">
                        9
                      </Button>
                      <div className="border-[1px] border-indigo_51 border-solid md:h-[11px] h-[32px] md:ml-[0] ml-[8px] p-[10px] relative w-[32px]">
                        <Img
                          src="images/img_arrowright_bluegray_400.svg"
                          className="absolute h-[11px] inset-[0] justify-center m-[auto] w-[auto]"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[764px] text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        9 of 200 data
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

export default CustomerPage;
