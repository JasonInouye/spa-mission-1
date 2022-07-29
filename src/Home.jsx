import React, {useState} from "react";
import {spacing} from "@ui5/webcomponents-react-base";
import {BarChart, LineChart} from "@ui5/webcomponents-react-charts";
import {useNavigate} from "react-router-dom";
import MyCustomElement from "./MyCustomElement";
import "@ui5/webcomponents-icons/dist/line-chart.js";
import "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import "@ui5/webcomponents-icons/dist/list.js";
import "@ui5/webcomponents-icons/dist/table-view.js";
import {
    Card,
    CardHeader,
    Text,
    List,
    StandardListItem,
    ValueState,
    ProgressIndicator,
    Title,
    TitleLevel,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
  } from "@ui5/webcomponents-react";
  

const dataset = [
    {
      month: "January",
      data: 65
    },
    {
      month: "February",
      data: 59
    },
    {
      month: "March",
      data: 80
    },
    {
      month: "April",
      data: 81
    },
    {
      month: "May",
      data: 56
    },
    {
      month: "June",
      data: 55
    },
    {
      month: "July",
      data: 40
    }
  ];

  const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100)
      }
    };
  });
  
  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Friend Name",
      accessor: "friend.name"
    },
    {
      Header: "Friend Age",
      accessor: "friend.age"
    }
  ];


function Home() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleProgressHeaderClick = () => {
        navigate("/detail");
    };

    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart" ){
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("barChart");
            }, 2000);
        }   else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("lineChart"); 
            }, 2000)
        }
    };

    const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
    const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';


    return <div>
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            
        >     
            <MyCustomElement />
            <Card 
                header={
                    <CardHeader 
                        avatar={< Icon name={toggleCharts === "lineChart" ? "line-chart" : "horizontal-bar-chart"} />}
                        titleText="Stock Prices" 
                        subtitleText={`Click here to switch to ${switchToChart}`}
                        interactive
                        onClick={handleHeaderClick}
                    />
                } 
                style={{ width: "300px", ...spacing.sapUiContentPadding }}>
                <Text style={spacing.sapUiContentPadding}>
                    This is the content area of the Card
                </Text>     
                { toggleCharts === "lineChart" ? (
                <LineChart 
                    measures={[{accessor: "data", label: "Stock Price"}]} 
                    dimensions={[{accessor: "month"}]} 
                    dataset={dataset}
                    loading={loading}
                />
                ) : (
                <BarChart 
                    dimensions={[{accessor: "month" }]}
                    measures={[{accessor: "data", label: "Stock Price"}]}
                    dataset={dataset}
                    loading={loading}
                />
                )}
            </Card>
            
            <Card
                header={
                    <CardHeader
                        titleText="Progress"
                        subtitleText="List"
                        avatar={<Icon name="list" />}
                        interactive
                        onClick={handleProgressHeaderClick}
                    />
                }
            style={{width: "300px", ...spacing.sapUiContentPadding}}
            >
                <List>
                    <StandardListItem 
                        additionalText="finished" 
                        additionalTextState={ValueState.Success}
                    >
                        Activity 1
                    </StandardListItem>
                    <StandardListItem 
                        additionalText="finished" 
                        additionalTextState={ValueState.Success}
                    >
                        Activity 2
                    </StandardListItem>
                    <StandardListItem 
                        additionalText="in progress" 
                        additionalTextState={ValueState.Warning}
                        style={{ height: "80px" }}
                    >
                        <FlexBox direction={FlexBoxDirection.Column}>
                            <Title level={TitleLevel.H5}>Activity 3</Title>
                            <ProgressIndicator value={89} valueState={ValueState.Warning} />
                        </FlexBox>
                    </StandardListItem>
                    <StandardListItem 
                        additionalText="in progress" 
                        additionalTextState={ValueState.Error}
                        style={{ height: "80px" }}
                    >
                        <FlexBox direction={FlexBoxDirection.Column}>
                            <Title level={TitleLevel.H5}>Activity 4</Title>
                            <ProgressIndicator value={5} valueState={ValueState.Error} />
                        </FlexBox>
                    </StandardListItem>
                </List>
            </Card>

            <Card
                header={
                    <CardHeader
                        titleText="Analytical Table"
                        avatar={<Icon name="table-view" />}
                    />
                }
            style={{maxWidth: "900px", ...spacing.sapUiContentPadding }}
            >
                <AnalyticalTable 
                    data={tableData} 
                    columns={tableColumns}
                    visibleRows={5}
                    filterable={true}
                    groupable={true}
                />
            </Card>
        </FlexBox>
    </div>
}

export default Home