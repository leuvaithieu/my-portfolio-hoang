import classNames from "classnames/bind";
import style from './DefaultLayout.module.scss'
import Header from "../components/Header";
import MouseCursor from "~/components/Mouse/MouseCursor";
import { useBreakpoints } from "~/Hooks/useBreakPoint";
import Mesenger from "~/components/Messenger";
// import Loading from "~/components/Loading";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function DefaultLayout({children}) {
    const { isLg } = useBreakpoints();
    const [loading, setLoadingPage] = useState(true);
    const [showLoading, setShowLoading] = useState(true);
    const onBodyLoader = () =>{};

    // useEffect(()=>{
    //     const timber =  setTimeout(()=>{
    //         setLoadingPage(false);
    //         clearTimeout(timber)
    //     },500);
    //     const timberHide = setTimeout(()=>{
    //         setShowLoading(false);
    //         clearTimeout(timberHide)
    //     },100000)
    // },[])

    return ( 
        <div className={cx('wrapper')}>
            {/* {showLoading && <Loading isLoading={loading}/>} */}
            <Header/>
            {isLg && <MouseCursor/>}
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;