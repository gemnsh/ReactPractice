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
            from="2024-01-01"
            to="2024-12-31"
            emptyColor={props.sendThemeArray.color_01}
            colors={[props.sendThemeArray.calender_01,props.sendThemeArray.calender_02,props.sendThemeArray.calender_03,props.sendThemeArray.calender_04,props.sendThemeArray.calender_05,props.sendThemeArray.calender_06]}
            margin={{ top: 90, right: 10, bottom: 10, left: 30}}
            monthBorderColor={props.sendThemeArray.color_09}
            dayBorderWidth={2}
            dayBorderColor={props.sendThemeArray.color_09}
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