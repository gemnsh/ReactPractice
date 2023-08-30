import { PieChart } from 'react-minimal-pie-chart';

const TimeChart =(props) =>{

    return(
        <PieChart
            data={[{
                value:100,
                color:props.color,
                name: "name1",}
            ]}
            reveal={props.value}
            lineWidth={10}
            background={props.sendThemeArray.color_03}
            animate
            rounded
            startAngle={props.start}
            segmentsStyle={(index) => ({
                fontSize: '5px',
                fontFamily: 'sans-serif',
              })}
            >
        </PieChart>
    );
};

export default TimeChart;