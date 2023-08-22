import React from "react";
const HexaButton = (props) =>{

    const fillName="url(#"+ props.gradientName+"_fill)";

    return(
        <div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg"  width="96" height="106" viewBox="0 0 96 106" fill="none">
                <g filter={fillName}>
                    <path id="" d="M51 1.88675C47.906 0.100423 44.094 0.100423 41 1.88675L7.69873 21.1132C4.60472 22.8996 2.69873 26.2008 2.69873 29.7735V68.2265C2.69873 71.7992 4.60472 75.1004 7.69873 76.8868L41 96.1132C44.094 97.8996 47.906 97.8996 51 96.1132L84.3013 76.8868C87.3953 75.1004 89.3013 71.7992 89.3013 68.2265V29.7735C89.3013 26.2008 87.3953 22.8996 84.3013 21.1132L51 1.88675Z" fill={fillName} />
                    <path d="M42.25 4.05181L8.94873 23.2783C6.62822 24.6181 5.19873 27.094 5.19873 29.7735V68.2265C5.19873 70.906 6.62822 73.3819 8.94873 74.7217L42.25 93.9482C44.5705 95.2879 47.4295 95.2879 49.75 93.9482L83.0513 74.7217C85.3718 73.3819 86.8013 70.906 86.8013 68.2265V29.7735C86.8013 27.094 85.3718 24.6181 83.0513 23.2783L49.75 4.05182C47.4295 2.71207 44.5705 2.71207 42.25 4.05181Z" stroke={props.stroke} strokeWidth="5"/>
                </g>
                <defs>
                    <filter id="filter0_d_511_4" x="0.69873" y="0.547005" width="94.6025" height="104.906" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="2" dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_511_4"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_511_4" result="shape"/>
                    </filter>
                    <linearGradient id={props.gradientName+'_fill'} x1="46" y1="-1" x2="46" y2="99" gradientUnits="userSpaceOnUse">
                    <stop stopColor={props.color[0]}/>
                    <stop offset="1" stopColor={props.color[1]} stopOpacity="100%"/>
                    </linearGradient>
                </defs>
                <image x="14" y="10" width="66" height="76"/>
                <text x="12" y="53" fill="#FFFFFF" font-size="10" font-family="'Leckerli One', cursive">
                    {props.gradientName}
                </text>
            </svg>
            
            </div>

        </div>
    )

};

export default HexaButton;