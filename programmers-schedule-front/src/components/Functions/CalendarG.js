import React from "react";
import { ResponsiveCalendar } from '@nivo/calendar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CalendarG = (props) => {

    const theme = {
        labels: { text: { fontSize: 15, fill: "#ffffff" } }
        }

    return (
            <ResponsiveCalendar
            data={[...props.data]}
            from="2023-01-01"
            to="2023-12-31"
            emptyColor="#C2D4F2"
            colors={['#F5F9BF', '#ECF67B', '#F7A549','#F9b544','#f6993b', '#E5694F','#Ec8463', '#ec5155', '#d1444e', '#D8555E', '#922e4b']}
            margin={{ top: 90, right: 0, bottom: 10, left: 30}}
            yearSpacing={40}
            monthBorderColor="#889ACE"
            dayBorderWidth={2}
            dayBorderColor="#C2D4F2"
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left',
                }
            ]}

            theme={theme}
        />
    )
}

export default CalendarG;