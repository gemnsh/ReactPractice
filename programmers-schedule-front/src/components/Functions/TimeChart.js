import React from "react";
import './TimeChart.css';

const TimeChart =(props) =>{

    const Svgchart = ({radius})=>(
        <svg className="countdown-svg2" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="150" cy="150" r="120" fill="transparent" stroke={props.sendThemeArray.color_03} strokeWidth="24" />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                d={describeArc(150, 150,90, 0, 30)}
            />
            <path
                fill="none"
                stroke={props.sendThemeArray.color_03}
                strokeWidth="10"
                d={describeArc(150, 150,90, 30, 60)}
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                d={describeArc(150, 150,90, 60, 90)}
            />
            <path
                fill="none"
                stroke={props.sendThemeArray.color_03}
                strokeWidth="10"
                d={describeArc(150, 150,90, 90, 120)}
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                d={describeArc(150, 150,90, 120, 150)}
            />
            <path
                fill="none"
                stroke={props.sendThemeArray.color_03}
                strokeWidth="10"
                d={describeArc(150, 150,90, 150, 180)}
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                d={describeArc(150, 150,90, 180, 210)}
            />
            <path
                fill="none"
                stroke={props.sendThemeArray.color_03}
                strokeWidth="10"
                d={describeArc(150, 150,90, 210, 240)}
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                d={describeArc(150, 150,90, 240, 270)}
            />
            <path
                fill="none"
                stroke={props.sendThemeArray.color_03}
                strokeWidth="10"
                d={describeArc(150, 150,90, 270, 300)}
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                d={describeArc(150, 150,90, 300, 330)}
            />
            <path
                fill="none"
                stroke={props.sendThemeArray.color_03}
                strokeWidth="10"
                d={describeArc(150, 150,90, 330, 360)}
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                d={describeArc(150, 150,70, 0, 180)}
            />
            <path
                fill="none"
                stroke={props.sendThemeArray.color_03}
                strokeWidth="10"
                d={describeArc(150, 150,70, 180, 360)}
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth="10"
                d={describeArc(150, 150, 120, props.start, props.start+radius)}
                            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth="65"
                d={describeArc(150, 150, 32.5, props.start, props.start+radius)}
            />
            <g id="arrow2" transform ={`translate(150, 150) rotate(${props.start+radius+270})`}>
                <polygon points="110 -2,120 10 ,130 -2" fill={props.color} display= {props.buttonState?'none':''}/>
            </g>
        </svg>

    )
    
    return(
        <div className="countdown-svg">
            <Svgchart radius={props.value} />
        </div>
    );
};

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

const describeArc =(x, y, radius, startAngle, endAngle) => {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');
    return d;
}
export default TimeChart;