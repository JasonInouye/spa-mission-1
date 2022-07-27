import React from "react";
import {Card, CardHeader, Text, Icon} from "@ui5/webcomponents-react";
import {spacing} from "@ui5/webcomponents-react-base";
import {BarChart, LineChart} from "@ui5/webcomponents-react-charts"
import {useState} from "react";
import "@ui5/webcomponents-icons/dist/line-chart.js";
import "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";

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

function MyApp() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);

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
            style={{ width: "300px" }}>
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
    </div>
}

export default MyApp