import { ResponsiveSankey } from '@nivo/sankey';
import React, { Component } from 'react';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = {
    "nodes": [
      {
        "id": "John",
        "color": "hsl(154, 70%, 50%)"
      },
      {
        "id": "Raoul",
        "color": "hsl(143, 70%, 50%)"
      },
      {
        "id": "Jane",
        "color": "hsl(136, 70%, 50%)"
      },
      {
        "id": "Marcel",
        "color": "hsl(112, 70%, 50%)"
      },
      {
        "id": "Ibrahim",
        "color": "hsl(146, 70%, 50%)"
      },
      {
        "id": "Junko",
        "color": "hsl(187, 70%, 50%)"
      }
    ],
    "links": [
      {
        "source": "Junko",
        "target": "Raoul",
        "value": 88
      },
      {
        "source": "Junko",
        "target": "Ibrahim",
        "value": 44
      },
      {
        "source": "Marcel",
        "target": "Raoul",
        "value": 172
      },
      {
        "source": "Marcel",
        "target": "Junko",
        "value": 47
      },
      {
        "source": "John",
        "target": "Marcel",
        "value": 150
      },
      {
        "source": "John",
        "target": "Jane",
        "value": 38
      },
      {
        "source": "Jane",
        "target": "Junko",
        "value": 80
      },
      {
        "source": "Jane",
        "target": "Marcel",
        "value": 200
      },
      {
        "source": "Raoul",
        "target": "Ibrahim",
        "value": 152
      }
    ]
  }

const theme = {
    tooltip: {
      container: {
          background: '#1A1B36',
      },
      labelTextColor: '#FFFFFF'
  },
};


class Sankey extends Component {
    render() {
        return (
                <div style={{height: 400}}>
                        <ResponsiveSankey
                            data={data}
                            theme={theme}
                            margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
                            align="justify"
                            colors={{ scheme: 'category10' }}
                            nodeOpacity={1}
                            nodeThickness={18}
                            nodeInnerPadding={3}
                            nodeSpacing={24}
                            nodeBorderWidth={0}
                            nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                            linkOpacity={0.5}
                            linkHoverOthersOpacity={0.1}
                            enableLinkGradient={true}
                            labelPosition="outside"
                            labelOrientation="vertical"
                            labelPadding={16}
                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
                            animate={true}
                            motionStiffness={140}
                            motionDamping={13}
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    translateX: 130,
                                    itemWidth: 100,
                                    itemHeight: 14,
                                    itemDirection: 'right-to-left',
                                    itemsSpacing: 2,
                                    itemTextColor: '#999',
                                    symbolSize: 14,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                </div>
        )
    }
}


export default Sankey;
