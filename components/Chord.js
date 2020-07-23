import { ResponsiveChord } from '@nivo/chord';
import React, { Component } from 'react';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data= [
    [
      298,
      147,
      223,
      212,
      104
    ],
    [
      404,
      367,
      1013,
      405,
      73
    ],
    [
      107,
      54,
      367,
      986,
      316
    ],
    [
      160,
      360,
      323,
      154,
      156
    ],
    [
      107,
      111,
      1981,
      51,
      143
    ]
  ]

  const theme = {
    tooltip: {
      container: {
          background: '#1A1B36',
      },
  },
  };


class Chord extends Component {
    render() {
        return (
                <div style={{height: 370}}>
                     <ResponsiveChord
                        matrix={data}
                        theme= {theme}
                        keys={[ 'John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim' ]}
                        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                        valueFormat=".2f"
                        padAngle={0.02}
                        innerRadiusRatio={0.96}
                        innerRadiusOffset={0.02}
                        arcOpacity={1}
                        arcBorderWidth={1}
                        arcBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
                        ribbonOpacity={0.5}
                        ribbonBorderWidth={1}
                        ribbonBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
                        enableLabel={true}
                        label="id"
                        labelOffset={12}
                        labelRotation={-90}
                        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
                        colors={{ scheme: 'nivo' }}
                        isInteractive={true}
                        arcHoverOpacity={1}
                        arcHoverOthersOpacity={0.25}
                        ribbonHoverOpacity={0.75}
                        ribbonHoverOthersOpacity={0.25}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={7}
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 70,
                                itemWidth: 80,
                                itemHeight: 14,
                                itemsSpacing: 0,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                symbolSize: 12,
                                symbolShape: 'circle',
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


export default Chord;