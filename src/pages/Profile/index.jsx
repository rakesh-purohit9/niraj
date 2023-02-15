import React from "react";

import { Img, Text, Line, Input, Button, List, ReactTable } from "components";
import { CloseSVG } from "../../assets/images";
import { createColumnHelper } from "@tanstack/react-table";

const ProfilePage = () => {
  const tableData2 = React.useRef([
    {
      rowno: "1",
      rowprojects: "Branding guideline",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,000",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
    {
      rowno: "3",
      rowprojects: "Landing pages",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,800",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
    {
      rowno: "3",
      rowprojects: "Landing pages",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,800",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
    {
      rowno: "3",
      rowprojects: "Landing pages",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,800",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
  ]);
  const columnHelper2 = createColumnHelper();
  const column2 = [
    columnHelper2.accessor("rowno", {
      cell: (info) => (
        <div className="flex items-center justify-center p-[5px]">
          <Text
            className="font-medium mt-[34px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[115px] p-[3px] md:w-[100%] w-[17%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            No.
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowprojects", {
      cell: (info) => (
        <div className="flex items-center justify-center">
          <Text
            className="font-medium mt-[39px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[193px] md:w-[100%] w-[28%]">
          <Text
            className="font-normal mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Projects
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowstart", {
      cell: (info) => (
        <div className="flex items-center justify-center">
          <Text
            className="font-medium mt-[39px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[136px] pr-[3px] py-[3px] md:w-[100%] w-[20%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Start
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowlinetwo", {
      cell: (info) => (
        <div className="flex items-center justify-center">
          <Text
            className="font-medium mt-[39px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[143px] pr-[3px] py-[3px] md:w-[100%] w-[21%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Deadline
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowbudget", {
      cell: (info) => (
        <div className="flex items-center justify-center">
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
        <div className="flex md:flex-1 items-center justify-center min-w-[110px] pr-[5px] pt-[5px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Budget
          </Text>
        </div>
      ),
    }),
  ];

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
              <div className="flex flex-col items-start justify-start mb-[507px] md:w-[100%] w-[87%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_icon_3.svg"
                    className="h-[20px] w-[20px]"
                    alt="Icon"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
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
          <Line className="bg-indigo_51 h-[1038px] md:h-[1px] md:w-[100%] w-[1px]" />
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
              <div className="flex md:flex-col flex-row gap-[21px] items-end justify-between mt-[14px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[33%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Profile
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mt-[37px] pb-[36px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[136px] mx-[auto] object-cover w-[100%]"
                        alt="ImgLibIMGFifteen"
                      />
                      <Img
                        src="images/img_sherlocktoyfacelow.webp"
                        className="h-[120px] mt-[-60px] mx-[auto] object-cover rounded-[24px] w-[120px] z-[1]"
                        alt="SherlockToyFacelow One"
                      />
                    </div>
                    <div className="flex flex-col gap-[24px] items-center justify-start mt-[24px] md:w-[100%] w-[72%]">
                      <div className="flex flex-col gap-[13px] items-center justify-start pt-[4px] px-[4px] w-[100%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Sam Brown
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          sambrown@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center md:w-[100%] w-[50%]">
                        <Img
                          src="images/img_group_3.svg"
                          className="h-[20px] w-[20px]"
                          alt="globe"
                        />
                        <Text
                          className="font-medium ml-[5px] mr-[2px] text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          sambrown.com
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_600 cursor-pointer font-bold min-w-[147px] mt-[40px] py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                      Logout
                    </Button>
                    <Img
                      src="images/img_socialicons.svg"
                      className="h-[20px] mt-[24px] w-[auto]"
                      alt="socialicons"
                    />
                    <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[83%]" />
                    <Text
                      className="font-normal mt-[34px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Member since 2021
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex font-inter items-center justify-end mt-[21px] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                    <div className="flex flex-col gap-[28px] items-center justify-start mt-[8px] md:w-[100%] w-[96%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Personal info.
                        </Text>
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-[32px] w-[32px]"
                          alt="morehorizontal"
                        />
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between pl-[3px] py-[3px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Full name
                          </Text>
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Avori
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Mobile
                          </Text>
                          <Text
                            className="font-medium my-[2px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[63px] items-center justify-start pl-[2px] pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            E-mail
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ackermanlhn@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hanoi, Vietnam
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter gap-[21px] items-center justify-start md:mt-[0] mt-[57px] md:w-[100%] w-[67%]">
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[62%]">
                          <Button className="bg-gray_51 flex h-[48px] items-center justify-center my-[5px] p-[14px] rounded-[4px] w-[48px]">
                            <Img
                              src="images/img_buttonprimary_6.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary"
                            />
                          </Button>
                          <div className="flex flex-col gap-[14px] items-start justify-end pr-[4px] py-[4px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Completed tasks
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              125
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-[32px] w-[32px]"
                          alt="morehorizontal One"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[62%]">
                          <Button className="bg-gray_51 flex h-[48px] items-center justify-center my-[5px] p-[14px] rounded-[4px] w-[48px]">
                            <Img
                              src="images/img_buttonprimary_6.svg"
                              className="h-[20px]"
                              alt="ButtonPrimary One"
                            />
                          </Button>
                          <div className="flex flex-col gap-[18px] items-start justify-start pr-[4px] pt-[4px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total revenue
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              $10,000
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-[32px] w-[32px]"
                          alt="morehorizontal Two"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="bg-white_A700 flex items-center justify-end p-[29px] sm:px-[20px] rounded-[4px] shadow-bs4 w-[100%]">
                    <div className="flex flex-col gap-[31px] items-center justify-start mt-[3px] w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start w-[100%]">
                        <Text
                          className="font-bold md:mt-[0] my-[5px] text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          My projects
                        </Text>
                        <Img
                          src="images/img_search_bluegray_400.svg"
                          className="h-[32px] md:ml-[0] ml-[505px] w-[32px]"
                          alt="search"
                        />
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-[32px] md:ml-[0] ml-[24px] w-[32px]"
                          alt="morehorizontal Three"
                        />
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <div className="overflow-auto w-[100%]">
                          <ReactTable
                            columns={column2}
                            data={tableData2.current}
                            rowClass={""}
                            headerClass=""
                          />
                        </div>
                        <div className="h-[24px] w-[24px]"></div>
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

export default ProfilePage;
