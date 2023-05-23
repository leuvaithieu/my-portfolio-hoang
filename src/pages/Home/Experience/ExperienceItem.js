import React from "react";

const experienceItem = (props)=>{
    const {
        title,role,durations,descriptions,skills,timeLine
    } = props;
    return (
        <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content bg-gray-100 dark:bg-[#333C42]">
                <h2>{title}</h2>
                <div className="p-2 rounded flex flex-col lg:flex-row bg-gray-200 dark:bg-gray-600  justify-between text-xs">
                    <span className="timeline-content-info-title flex items-center gap-1">
                        <svg
                            fill="currentColor"
                            width="20px"
                            height="20px"
                            viewBox="-5 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M11.12 27.080c-1.2 0-1.68-0.88-2-1.48-0.28-0.56-0.56-1.080-1.36-1.44-0.32-0.12-0.6-0.2-0.88-0.2-0.4 0-0.72 0.12-1.12 0.24-0.36 0.12-0.72 0.24-1.12 0.24v0c-0.52 0-0.96-0.2-1.36-0.6-0.84-0.84-0.56-1.8-0.36-2.48 0.2-0.6 0.36-1.16 0.040-1.96s-0.88-1.080-1.44-1.36c-0.6-0.36-1.48-0.84-1.48-2.040s0.88-1.68 1.48-2c0.56-0.28 1.080-0.56 1.44-1.36 0.32-0.8 0.16-1.36-0.040-1.96-0.2-0.68-0.52-1.6 0.36-2.48 0.4-0.4 0.84-0.56 1.36-0.56 0.4 0 0.76 0.12 1.12 0.24s0.72 0.24 1.12 0.24v0c0.28 0 0.56-0.080 0.88-0.2 0.8-0.32 1.080-0.88 1.36-1.44 0.32-0.64 0.8-1.48 2-1.48s1.68 0.88 2 1.52c0.28 0.56 0.56 1.080 1.36 1.44 0.32 0.12 0.6 0.2 0.88 0.2 0.4 0 0.72-0.12 1.12-0.24 0.36-0.12 0.72-0.24 1.12-0.24 0.52 0 0.96 0.2 1.36 0.56 0.84 0.84 0.56 1.8 0.36 2.48-0.2 0.6-0.36 1.16-0.040 1.96s0.88 1.080 1.44 1.36c0.64 0.32 1.48 0.8 1.48 2s-0.88 1.68-1.48 2c-0.56 0.28-1.080 0.56-1.44 1.36-0.32 0.8-0.16 1.36 0.040 1.96 0.2 0.68 0.52 1.6-0.36 2.48-0.4 0.4-0.84 0.6-1.36 0.6-0.4 0-0.76-0.12-1.12-0.24s-0.72-0.24-1.12-0.24c-0.28 0-0.56 0.080-0.88 0.2-0.8 0.32-1.080 0.88-1.36 1.44-0.36 0.6-0.8 1.48-2 1.48zM6.8 22.28c0.52 0 1 0.12 1.52 0.32 1.36 0.56 1.88 1.56 2.2 2.2 0.32 0.6 0.36 0.6 0.52 0.6s0.2 0 0.52-0.6c0.32-0.64 0.84-1.64 2.2-2.2 0.52-0.2 1-0.32 1.52-0.32 0.64 0 1.16 0.16 1.6 0.32 0.24 0.080 0.48 0.16 0.6 0.16 0.040 0 0.080 0 0.16-0.080 0.12-0.12 0.16-0.16-0.080-0.8-0.2-0.72-0.56-1.76 0-3.12s1.56-1.88 2.2-2.2c0.6-0.32 0.6-0.36 0.6-0.52s0-0.2-0.6-0.52c-0.64-0.32-1.64-0.84-2.2-2.2s-0.24-2.44 0-3.12c0.2-0.64 0.16-0.68 0.080-0.8-0.080-0.080-0.12-0.080-0.16-0.080-0.16 0-0.36 0.080-0.6 0.16-0.44 0.12-0.96 0.32-1.6 0.32-0.52 0-1-0.12-1.52-0.32-1.36-0.56-1.88-1.56-2.2-2.2-0.32-0.6-0.36-0.6-0.52-0.6s-0.2 0-0.52 0.6c-0.32 0.64-0.84 1.64-2.2 2.2-0.52 0.2-1 0.32-1.52 0.32v0c-0.64 0-1.16-0.16-1.6-0.32-0.24-0.080-0.48-0.16-0.6-0.16-0.040 0-0.080 0-0.16 0.080-0.12 0.12-0.16 0.16 0.080 0.8 0.2 0.68 0.56 1.76 0 3.12s-1.56 1.88-2.2 2.2c-0.6 0.32-0.6 0.36-0.6 0.52s0 0.2 0.6 0.52c0.64 0.32 1.64 0.84 2.2 2.2s0.24 2.44 0 3.12c-0.2 0.64-0.16 0.68-0.080 0.8 0.080 0.080 0.12 0.080 0.16 0.080 0.16 0 0.36-0.080 0.6-0.16 0.48-0.16 1-0.32 1.6-0.32z"></path>
                        </svg>
                        {role}
                    </span>
                    <span className="timeline-content-info-date flex items-center gap-1">
                        <svg
                            className="m-1"
                            width="12px"
                            height="12px"
                            viewBox="0 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <defs></defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-60.000000, -2319.000000)"
                                fill="currentColor"
                                >
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path
                                    d="M21.971246,2167 L5.99680511,2167 L5.99680511,2163.971 C5.99680511,2163.435 6.43111022,2163 6.96625399,2163 L7.99361022,2163 L7.99361022,2165 L9.99041534,2165 L9.99041534,2163 L17.9776358,2163 L17.9776358,2165 L19.9744409,2165 L19.9744409,2163 L20.9728435,2163 C21.5239617,2163 21.971246,2163.448 21.971246,2164 L21.971246,2167 Z M21.971246,2176 C21.971246,2176.55 21.5219649,2177 20.9728435,2177 L6.99520767,2177 C6.44408946,2177 5.99680511,2176.552 5.99680511,2176 L5.99680511,2169 L21.971246,2169 L21.971246,2176 Z M4.06389776,2176.761 C4.06389776,2177.865 5.02136581,2179 6.12360224,2179 L22.0980431,2179 C23.201278,2179 24,2177.979 24,2176.761 C24,2176.372 23.9680511,2164.36 23.9680511,2163.708 C23.9680511,2161.626 23.6875,2161 19.9744409,2161 L19.9744409,2159 L17.9776358,2159 L17.9776358,2161 L9.99041534,2161 L9.99041534,2159 L7.99361022,2159 L7.99361022,2161 L5.99680511,2161 C4.8985623,2161 4,2161.9 4,2163 L4.06389776,2176.761 Z"
                                    id="calendar-[#1322]"
                                    ></path>
                                </g>
                                </g>
                            </g>
                        </svg>
                        {durations}
                    </span>
                </div>
                <div className="py-4">
                    {descriptions}
                </div>
                {skills.length && (
                    <ul className="content-skills flex text-xs gap-1 flex-wrap">
                        {skills.map((item, index) =>(
                            <li className="p-1 bg-gray-200 dark:bg-gray-600 rounded" key={`experience-skill-${index}`}>{item}</li>
                            ))}
                    </ul>
                )}
                <span className="cd-date mt-4">{timeLine}</span>
            </div>
        </div>
    )
}

export default experienceItem;