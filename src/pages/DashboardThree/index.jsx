import React from "react";

import {
  Img,
  Line,
  Text,
  Input,
  Button,
  SelectBox,
  List,
  Radio,
  ReactTable,
} from "components";
import { CloseSVG } from "../../assets/images";
import {
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { ComposedData, RadialBarData } from "./chartData.js";
import { createColumnHelper } from "@tanstack/react-table";

const DashboardThreePage = () => {
  const tableData = React.useRef([
    {
      rowno: "1",
      rowcustomer: "Ackerman",
      rowdate: "12.02.2022",
      rowamount: "$20.0",
      roworderno: "#21033",
      rowpaymenttype: "images/img_morehorizontal.svg",
    },
    {
      rowno: "2",
      rowcustomer: "Avori",
      rowdate: "12.02.2022",
      rowamount: "$32.0",
      roworderno: "#21034",
      rowpaymenttype: "images/img_morehorizontal.svg",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("rowno", {
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
        <div className="flex md:flex-1 items-center justify-center min-w-[95px] p-[3px] md:w-[100%] w-[11%]">
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
    columnHelper.accessor("rowcustomer", {
      cell: (info) => (
        <div className="flex flex-row gap-[12px] items-start justify-center pr-[2px] py-[2px]">
          <Img
            src="defaultNoData.png"
            className="h-[24px] md:h-[auto] mt-[34px] rounded-[50%] w-[24px]"
            alt="RobotoToyFaceFinalTwo"
          />
          <Text
            className="font-medium mr-[63px] mt-[38px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[178px] md:w-[100%] w-[20%]">
          <Text
            className="font-normal my-[3px] not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Customer
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowdate", {
      cell: (info) => (
        <div className="flex items-center justify-center pr-[5px] py-[5px]">
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
        <div className="flex md:flex-1 items-center justify-center min-w-[148px] pr-[3px] py-[3px] md:w-[100%] w-[17%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Date
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowamount", {
      cell: (info) => (
        <div className="flex items-center justify-center pr-[2px] py-[2px]">
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
        <div className="flex md:flex-1 items-center justify-center min-w-[132px] pr-[3px] py-[3px] md:w-[100%] w-[15%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Amount
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("roworderno", {
      cell: (info) => (
        <div className="flex items-center justify-center pr-[5px] py-[5px]">
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
        <div className="flex md:flex-1 items-center justify-center min-w-[133px] pr-[3px] py-[3px] md:w-[100%] w-[15%]">
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
    columnHelper.accessor("rowpaymenttype", {
      cell: (info) => (
        <div className="flex flex-row items-start justify-between pr-[2px] py-[2px]">
          <Text
            className="font-medium mt-[38px] text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Visa Card
          </Text>
          <Img
            src={info?.getValue()}
            className="h-[24px] mr-[18px] mt-[34px] w-[24px]"
            alt="morevertical"
          />
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[225px] pr-[5px] pt-[5px] md:w-[100%] w-[25%]">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Payment type
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
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[84px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[29px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_group18018.svg"
                className="h-[28px] mt-[7px] w-[auto]"
                alt="Group18018"
              />
              <div className="flex flex-col gap-[34px] items-center justify-start mb-[930px] w-[100%]">
                <Img
                  src="images/img_icon_3.svg"
                  className="h-[20px] w-[20px]"
                  alt="Icon"
                />
                <Img
                  src="images/img_icon_4.svg"
                  className="h-[20px] w-[20px]"
                  alt="Icon One"
                />
                <Img
                  src="images/img_icon_5.svg"
                  className="h-[20px] w-[20px]"
                  alt="Icon Two"
                />
                <Img
                  src="images/img_icon_6.svg"
                  className="h-[20px] w-[20px]"
                  alt="Icon Three"
                />
                <Img
                  src="images/img_icon_7.svg"
                  className="h-[20px] w-[20px]"
                  alt="Icon Four"
                />
                <Img
                  src="images/img_icon_8.svg"
                  className="h-[20px] w-[20px]"
                  alt="Icon Five"
                />
                <Img
                  src="images/img_icon_9.svg"
                  className="h-[20px] w-[20px]"
                  alt="Icon Six"
                />
                <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                  <div className="bg-bluegray_400 h-[20px] rounded-[50%] w-[20px]"></div>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 h-[1463px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <header className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mx-[auto] my-[10px] w-[97%]">
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
                  wrapClassName="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex md:ml-[0] md:w-[100%] ml-[305px] pl-[16px] pr-[22px] py-[13px] rounded-[4px] sm:hidden sm:pr-[20px] sm:w-[100%] w-[33%]"
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
                  className="h-[24px] sm:hidden md:ml-[0] ml-[211px] w-[24px]"
                  alt="shoppingbag"
                />
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] sm:hidden items-end justify-start md:ml-[0] ml-[24px] w-[24px]"
                  style={{ backgroundImage: "url('images/img_group2653.svg')" }}
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
            <div className="bg-gray_51 flex font-poppins items-center justify-start pl-[12px] py-[12px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[74%]">
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Overview
                      </Text>
                      <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[20%]">
                        <Button className="bg-white_A700 flex items-center justify-center p-[13px] rounded-[4px] w-[auto]">
                          <Img
                            src="images/img_buttonprimary.svg"
                            className="h-[20px]"
                            alt="ButtonPrimary"
                          />
                        </Button>
                        <SelectBox
                          className="bg-white_A700 font-medium pl-[16px] py-[16px] rounded-[4px] text-[14px] text-bluegray_800 text-left w-[auto]"
                          placeholderClassName="text-bluegray_800"
                          name="dropdown"
                          placeholder="Last week"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[20px] mr-[16px] w-[20px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between mt-[24px] w-[100%]">
                      <List
                        className="md:flex-1 flex-col gap-[20px] grid md:w-[100%] w-[21%]"
                        orientation="vertical"
                      >
                        <div className="bg-white_A700 flex items-center justify-end my-[0] p-[36px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                          <div className="flex flex-col gap-[32px] items-center justify-start mt-[5px] md:w-[100%] w-[59%]">
                            <Img
                              src="images/img_frame.svg"
                              className="h-[43px] w-[auto]"
                              alt="Frame"
                            />
                            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total Tasks
                              </Text>
                              <Text
                                className="font-bold text-bluegray_800 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                120
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-center justify-end my-[0] p-[36px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                          <div className="flex flex-col gap-[33px] items-center justify-start mt-[5px] md:w-[100%] w-[57%]">
                            <Img
                              src="images/img_frame_43X73.svg"
                              className="h-[43px] w-[auto]"
                              alt="Frame One"
                            />
                            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                New Tasks
                              </Text>
                              <Text
                                className="font-bold text-bluegray_800 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                60
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Statistics
                              </Text>
                              <Img
                                src="images/img_morehorizontal.svg"
                                className="h-[32px] w-[32px]"
                                alt="morehorizontal"
                              />
                            </div>
                            <div className="flex h-[176px] items-center justify-start w-[100%]">
                              <ResponsiveContainer>
                                <ComposedChart data={ComposedData}>
                                  <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#5564d7"
                                  />
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <RechartsTooltip />
                                  <RechartsLegend />
                                  <Bar dataKey="c0" fill="#ffc85f" />
                                </ComposedChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                          <div className="bg-gray_104 flex items-center justify-start p-[16px] rounded-[4px] w-[100%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between md:w-[100%] w-[96%]">
                              <div className="flex flex-col items-start justify-start pb-[4px] pr-[4px] w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Data project report
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  • In process
                                </Text>
                              </div>
                              <div className="bg-indigo_52 flex h-[64px] items-center justify-start p-[4px] rounded-[50%] w-[64px]">
                                <div className="bg-indigo_400 h-[56px] rounded-[50%] shadow-bs3 w-[56px]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[32%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Sales
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-[32px] w-[32px]"
                              alt="morehorizontal One"
                            />
                          </div>
                          <div className="h-[190px] md:h-[undefinedpx] mt-[32px] relative w-[190px]">
                            <ResponsiveContainer>
                              <RadialBarChart data={RadialBarData}>
                                <RechartsTooltip />

                                <RadialBar background dataKey="c0" />
                              </RadialBarChart>
                            </ResponsiveContainer>
                          </div>
                          <List
                            className="flex-col gap-[20px] grid items-center mt-[37px] w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row gap-[11px] items-start justify-between w-[100%]">
                              <Radio
                                value="CurrentWeek"
                                className="font-normal not-italic text-[14px] text-bluegray_400 text-left"
                                inputClassName="bg-red_600 h-[8px] mr-[5px] w-[8px]"
                                checked={false}
                                name="ProfileViewsTwo"
                                label="Current Week"
                              ></Radio>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $1,200
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center pr-[2px] py-[2px] rounded-[4px] w-[auto]">
                                <Img
                                  src="images/img_line.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="line One"
                                />
                                <Text
                                  className="font-semibold mt-[2px] text-green_700 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-row gap-[19px] items-start justify-between w-[100%]">
                              <Radio
                                value="LastWeek"
                                className="font-normal not-italic text-[14px] text-bluegray_400 text-left"
                                inputClassName="bg-green_700 h-[8px] mr-[5px] w-[8px]"
                                checked={false}
                                name="ProfileViewsThree"
                                label="Last Week"
                              ></Radio>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $800
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center pr-[2px] py-[2px] rounded-[4px] w-[auto]">
                                <Img
                                  src="images/img_line.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="line Two"
                                />
                                <Text
                                  className="font-semibold mt-[2px] text-green_700 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                      <div className="flex h-[465px] justify-end relative md:w-[100%] w-[55%]">
                        <div className="flex flex-col gap-[11px] h-[100%] items-start justify-start mb-[101px] ml-[auto] mr-[158px] mt-[auto] pr-[4px] pt-[4px] w-[auto]">
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
                        <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                          <div className="flex flex-col items-center justify-start mb-[9px] mt-[2px] md:w-[100%] w-[99%]">
                            <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Statistics
                              </Text>
                              <Button
                                className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-center justify-center px-[16px] py-[11px] rounded-[4px] shadow-bs text-center"
                                leftIcon={
                                  <Img
                                    src="images/img_calendar.svg"
                                    className="mr-[10px] text-center"
                                    alt="calendar"
                                  />
                                }
                              >
                                <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_800 text-left">
                                  13 Aug - 20 Aug
                                </div>
                              </Button>
                            </div>
                            <div className="flex items-center justify-start mt-[26px] w-[100%]">
                              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-[100%]">
                                  <div className="flex sm:flex-1 flex-col gap-[27px] items-start justify-start sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Su
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Sa
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Fr
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Th
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      We
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Tu
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Mo
                                    </Text>
                                  </div>
                                  <div className="font-poppins md:h-[246px] h-[256px] relative sm:w-[100%] w-[88%]">
                                    <div
                                      className="absolute bg-cover bg-no-repeat md:h-[246px] h-[256px] inset-y-[0] left-[0] my-[auto] p-[3px] sm:w-[100%] w-[90%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group2652.svg')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_frame_246X252.svg"
                                        className="absolute h-[246px] inset-y-[0] left-[9%] my-[auto] w-[auto]"
                                        alt="Frame Three"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex h-[48px] items-center justify-end p-[16px] right-[0] shadow-bs2 top-[11%] w-[35%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group_white_A700_48X145.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row gap-[21px] items-center justify-between mt-[2px] md:w-[100%] w-[98%]">
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[41%]">
                                          <div className="bg-indigo_400 h-[6px] mb-[5px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                          <Text
                                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                                            variant="body1"
                                          >
                                            150.0
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[40%]">
                                          <div className="bg-amber_300 h-[6px] mb-[5px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                          <Text
                                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                                            variant="body1"
                                          >
                                            120.0
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between md:w-[100%] w-[85%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    -300
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    -200
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    -100
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    0
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    100
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    300
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[24px] items-start justify-center mt-[32px] md:w-[100%] w-[32%]">
                              <div className="flex flex-row gap-[8px] items-start justify-start w-[38%]">
                                <div className="bg-amber_300 h-[6px] mb-[2px] mt-[5px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Income
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[47%]">
                                <div className="bg-indigo_400 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Expenses
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                        <div className="flex flex-col gap-[29px] items-center justify-start mb-[5px] w-[100%]">
                          <div className="flex flex-row items-end justify-between w-[100%]">
                            <Text
                              className="font-bold my-[5px] text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Total projects
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-[32px] w-[32px]"
                              alt="morehorizontal Two"
                            />
                          </div>
                          <List
                            className="flex-col gap-[22.91px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile app (4/12)
                              </Text>
                              <div className="flex flex-row gap-[25px] items-end justify-between w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-indigo_400  rounded-[4px]"
                                    style={{ width: "27%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  34%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing page (2/4)
                              </Text>
                              <div className="flex flex-row gap-[26px] items-end justify-between w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-green_700  rounded-[4px]"
                                    style={{ width: "62%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  50%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Branding (2/2)
                              </Text>
                              <div className="flex flex-row gap-[7px] items-end justify-between w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-amber_300  rounded-[4px]"
                                    style={{ width: "96%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Branding (2/8)
                              </Text>
                              <div className="flex flex-row gap-[15px] items-end justify-between w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-red_600  rounded-[4px]"
                                    style={{ width: "17%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  25%
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex font-inter items-center justify-start mt-[20px] p-[26px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-center justify-start mb-[6px] md:w-[100%] w-[99%]">
                        <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                          <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Transactions history
                            </Text>
                            <Button
                              className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-center justify-center px-[16px] py-[11px] rounded-[4px] shadow-bs text-center"
                              leftIcon={
                                <Img
                                  src="images/img_calendar.svg"
                                  className="mr-[10px] text-center"
                                  alt="calendar"
                                />
                              }
                            >
                              <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_800 text-left">
                                13 Aug - 20 Aug
                              </div>
                            </Button>
                          </div>
                          <div className="overflow-auto w-[100%]">
                            <ReactTable
                              columns={column}
                              data={tableData.current}
                              rowClass={""}
                              headerClass=""
                            />
                          </div>
                        </div>
                        <div className="bg-gray_51 flex items-center justify-start p-[20px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              3
                            </Text>
                            <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[64px] md:w-[100%] w-[13%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                alt="VanGoghByAmritOne"
                              />
                              <div className="flex items-start justify-end pr-[5px] pt-[5px] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Benjamin
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium md:ml-[0] ml-[65px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              24.01.2022
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[62px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $16.0
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[90px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              #21030
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[74px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              MasterCard
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-[24px] md:ml-[0] ml-[91px] w-[24px]"
                              alt="morevertical Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 font-inter items-center justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[26%]">
                    <div className="flex flex-col gap-[37px] items-center justify-start mt-[11px] w-[100%]">
                      <div className="flex flex-col gap-[41px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[23px] items-center justify-start md:w-[100%] w-[88%]">
                          <div className="flex flex-row gap-[29px] items-start justify-between md:w-[100%] w-[99%]">
                            <Button className="bg-gray_51 flex h-[40px] items-center justify-center p-[13px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_buttonprimary_40X40.svg"
                                className="h-[14px]"
                                alt="ButtonPrimary One"
                              />
                            </Button>
                            <Text
                              className="font-semibold mt-[14px] text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-bluegray_800 text-[14px] font-inter">
                                Febuary{" "}
                              </span>
                              <span className="text-bluegray_400 text-[14px] font-inter">
                                2022
                              </span>
                            </Text>
                            <Button className="bg-gray_51 flex h-[40px] items-center justify-center p-[13px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_buttonprimary_4.svg"
                                className=""
                                alt="ButtonPrimary Two"
                              />
                            </Button>
                          </div>
                          <div className="w-[100%]"></div>
                        </div>
                        <div className="flex flex-col font-poppins items-center justify-start w-[100%]">
                          <Line className="bg-indigo_51 h-[1px] w-[100%]" />
                          <div className="flex flex-row items-center justify-between mt-[31px] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Recent activities
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-[32px] w-[32px]"
                              alt="morehorizontal Three"
                            />
                          </div>
                          <div className="flex flex-col font-inter gap-[24px] items-start justify-start mt-[37px] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Feb 24, 2022
                            </Text>
                            <List
                              className="flex-col grid items-center w-[100%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-row gap-[16px] items-center justify-between pr-[4px] pt-[4px] w-[100%]">
                                <Img
                                  src="defaultNoData.png"
                                  className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                  alt="RobotoToyFaceFinalTwo One"
                                />
                                <div className="flex flex-col items-start justify-start mr-[6px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Ackerman
                                  </Text>
                                  <Text
                                    className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    <span className="text-bluegray_900 text-[16px] font-inter">
                                      Changelog Revamp{" "}
                                    </span>
                                    <span className="text-red_600 text-[16px] font-inter">
                                      #ver 1.0
                                    </span>
                                    <span className="text-bluegray_900 text-[16px] font-inter">
                                      {" "}
                                      Homescreen{" "}
                                    </span>
                                  </Text>
                                  <Text
                                    className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex flex-1 items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                                <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                                  <Img
                                    src="defaultNoData.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="PunkToyFaceOne"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Blanker
                                    </Text>
                                    <Text
                                      className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Create user flow for Data Projects
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[93%]">
                                <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                  <Img
                                    src="defaultNoData.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="VanGoghByAmritOne One"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Lee Ri
                                    </Text>
                                    <Text
                                      className="font-medium mt-[13px] text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Revision design system
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[96%]">
                                <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                  <Img
                                    src="defaultNoData.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="RarePepeNakamotoToyFace"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-[4px] pt-[4px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Jackson
                                    </Text>
                                    <Text
                                      className="font-medium mt-[13px] text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Changelog Scan ID Card
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[79%]">
                                <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                  <Img
                                    src="defaultNoData.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="TinTinTwentyTwo"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-[4px] pt-[4px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Yomaha
                                    </Text>
                                    <Text
                                      className="font-medium mt-[13px] text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Pitching with client
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[24px] h-[272px] items-start justify-start w-[272px]">
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 23, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row gap-[16px] items-center justify-between pr-[4px] pt-[4px] w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                              alt="RobotoToyFaceFinalTwo Two"
                            />
                            <div className="flex flex-col items-start justify-start mr-[6px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Ackerman
                              </Text>
                              <Text
                                className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                as="h5"
                                variant="h5"
                              >
                                <span className="text-bluegray_900 text-[16px] font-inter">
                                  Changelog Revamp{" "}
                                </span>
                                <span className="text-red_600 text-[16px] font-inter">
                                  #ver 1.0
                                </span>
                                <span className="text-bluegray_900 text-[16px] font-inter">
                                  {" "}
                                  Homescreen{" "}
                                </span>
                              </Text>
                              <Text
                                className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 items-start justify-start pr-[4px] pt-[4px] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="PunkToyFaceOne One"
                              />
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Blanker
                                </Text>
                                <Text
                                  className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Create user flow for Data Projects
                                </Text>
                                <Text
                                  className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  2min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
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

export default DashboardThreePage;
