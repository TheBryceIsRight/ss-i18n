import React from "react";
import { ResponsiveBar } from "@nivo/bar";

// Nivo theming
const theme = {
  axis: {
    ticks: {
      line: {
        stroke: "#e9ecee",
        strokeWidth: 0
      },
      text: {
        fill: "white",
        fontFamily: "Roboto"
      }
    }
  },
  grid: {
    line: {
      stroke: "#e9ecee",
      strokeWidth: 0.5
    }
  },
  legends: {
    text: {
      fontFamily: "Roboto",
      fill: 'white'
    }
  },
  tooltip: {
    container: {
        background: '#1A1B36',
    },
},
};

class BarChart extends React.Component {
  render() {
    const { data, keys, index, groupMode, colors, tickValues, colorBy, customTooltip, layout } = this.props;

    return (
      <ResponsiveBar
        theme={theme}
        data={data}
        keys={keys}
        indexBy={index}
        groupMode={groupMode}
        margin={{
          top: 36,
          right: 32,
          bottom: 36,
          left: 32
        }}
        layout={layout}
        padding={0.5}
        colors={colors}
        colorBy={colorBy}
        borderColor="#919eab"
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 36
        }}
        axisLeft={{
          tickValues: tickValues,
          orient: "left",
          tickPadding: 0,
          tickRotation: 0,
          legend: "",
          legendPosition: "start",
          legendOffset: -40
        }}
        enableGridY={true}
        gridYValues={tickValues}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#1A1B36"
        enableLabel={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={customTooltip ? customTooltip : null}
      // legends={[
      //   {
      //     dataFrom: "keys",
      //     anchor: "top-left",
      //     direction: "row",
      //     justify: false,
      //     translateX: -10,
      //     translateY: -30,
      //     itemsSpacing: 32,
      //     itemWidth: 100,
      //     itemHeight: 20,
      //     itemDirection: "left-to-right",
      //     itemOpacity: 0.85,
      //     itemTextColor: "#919eab",
      //     symbolSize: 10,
      //     symbolShape: "circle",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemOpacity: 1
      //         }
      //       }
      //     ]
      //   }
      // ]}
      />
    );
  }
}

export default BarChart;