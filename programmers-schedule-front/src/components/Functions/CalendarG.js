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
            emptyColor="#eeeeee"
            colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
            margin={{ top: 90, right: 0, bottom: 10, left: 30}}
            yearSpacing={40}
            monthBorderColor="#65a5cc"
            dayBorderWidth={2}
            dayBorderColor="#65a5cc"
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