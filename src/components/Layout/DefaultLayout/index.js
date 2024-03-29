import classNames from "classnames/bind";
import style from './DefaultLayout.module.scss'
import Header from "../components/Header";
import MouseCursor from "~/components/Mouse/MouseCursor";
import { useBreakpoints } from "~/Hooks/useBreakPoint";


const cx = classNames.bind(style);

function DefaultLayout({children}) {
    const { isLg } = useBreakpoints();
    return ( 
        <div className={cx('wrapper')}>
            
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