import React from 'react'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'
 
class LossChart extends React.PureComponent {
 
    render() {
 
        
 
        const contentInset = { top: 20, bottom: 20 }
 
        return (
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={ this.props.weights }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={ value => `${value}LBS` }
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={ this.props.weights }
                    svg={{ stroke: '#2b59c3' }}
                    contentInset={ contentInset }
                >
                    <Grid/>
                </LineChart>
            </View>
        )
    }
 
}

export default LossChart
