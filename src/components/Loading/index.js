import React from "react";

function Loading(props) {
    const {isLoading} = props;
    return <div id="preloader" className={`${!isLoading ? 'preloader' : ''}`}>
        <div className={`loader_line`}></div>
    </div>;
}

export default Loading;