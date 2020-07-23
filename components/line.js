import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        "id": "Data",
        "data": [
            {"x":"18-11-2017", "y":"19"},
            {"x":"21-11-2017", "y":"20"},
            {"x":"02-12-2017", "y":"20"},
            {"x":"09-12-2017", "y":"19"},
            {"x":"16-12-2017", "y":"18"},
            {"x":"23-12-2017", "y":"21"},
            {"x":"30-12-2017", "y":"18"},
            {"x":"06-01-2018", "y":"17"},
            {"x":"13-01-2018", "y":"17"},
            {"x":"20-01-2018", "y":"20"},
            {"x":"27-01-2018", "y":"20"},
            {"x":"03-02-2018", "y":"19"},
            {"x":"10-02-2018", "y":"17"},
            {"x":"17-02-2018", "y":"16"},
            {"x":"24-02-2018", "y":"16"},
            {"x":"03-03-2018", "y":"17"},
            {"x":"10-03-2018", "y":"16"},
            {"x":"17-03-2018", "y":"17"},
            {"x":"24-03-2018", "y":"19"},
            {"x":"31-03-2018", "y":"20"},
            {"x":"07-04-2018", "y":"19"},
            {"x":"14-04-2018", "y":"15"},
            {"x":"21-04-2018", "y":"20"},
        ]
    },
]

class LineGraph extends Component {
    render() {
        return (
                <div style={{height: 350}}>
                    <ResponsiveLine
                        data = {data}
                        curve = "monotoneY"
                        colors={{ scheme: 'nivo' }}
                        colorBy="id"
                        margin={{
                            "top": 20,
                            "right": 70,
                            "bottom": 40,
                            "left": 50
                        }}
                        xScale={{
                            //"type": "point"
                            "type":"time",
                            "format":"%d-%m-%Y"
                        }}
                        yScale={{
                            "type": "linear",
                            "min": "auto",
                            "max": "auto"
                        }}
                        stacked={true}
                        axisBottom={{
                            "orient": "bottom",
                            "tickSize": 5,
                            "tickPadding": 13,
                            "format": '%d %b'
                        }}
                        axisLeft={{
                            "orient": "center",
                            "tickSize": 5,
                            "tickPadding": 5,
                            "tickRotation": 0,
                        }}
                        enableGridX={false}
                        lineWidth={2}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabel="y"
                        pointLabelYOffset={-12}
                        enableArea={false}
                        areaOpacity={0.1}
                        animate={true}
                        useMesh={true}
                        motionStiffness={90}
                        motionDamping={15}
                        isInteractive={false}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                itemTextColor: '#FFFFFF',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(1, 1, 1, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        theme={{
                            points: {
                                text:{ 
                                    fontSize: '13px',
                                    
                                }
                            },
                            legends: {
                                text: {
                                    fontSize: '13px',
                                    fontWeight: 'regular',
                                    
                            }
                        },
                            axis: {
                                legend: {
                                    text: { 
                                        fontSize: '13px',
                                        fontWeight: 'regular',
                                        fill: '#FFFFFF'
                                    }
                                },
                                ticks: {
                                    text: { 
                                        fontSize: '13px',
                                        fontWeight:'regular',
                                        fill: '#FFFFFF'
                                    }
                                },
                            },
                        }}
                    />
                </div>
        )
    }
}

export default LineGraph;