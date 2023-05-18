import classNames from 'classnames/bind';
import styles from '../Home.module.scss';

import bgImg3 from '~/assets/images/side-effect3.webp'
import intro from '~/assets/images/intro-white.webp'
import portfolioOne from '~/assets/images/portfolio-1.JPG'
import portfolioSecond from '~/assets/images/portfolio-2.JPG'

const cx = classNames.bind(styles)
function Portfolio() {
    return <div className={cx('container', 'relative','portfolio','m-auto')}>
    <div className={cx('absolute','top-5','left-0')}>
        <img src ={bgImg3} ></img>
    </div>
    <div className={cx('text-center','max-w-[550px]', 'mx-auto')}>
        <div className={cx('title',' mb-6')}>
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
                Portfolio
            </span>
            <h3 className='text-[30px] lg:text-[40px]'>My Amazing Works</h3>
        </div>
        <div className='text lg:mb-9 dark:text-gray-400 text-gray-600'>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
        </div>
    </div>
    <div className='py-[30px] lg:py-[100px] divide-y divide-gray-500 lg:divide-y-0'>
        <div className='mb-0 py-10 lg:py-0 lg:mb-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 '>
                <a className='relative  self-center'>
                    <div className='will-change'>
                        <img alt='product' width="650" height="315" src={portfolioOne}/>
                    </div>
                </a>
                <div className='self-center'>
                    <div className='title lg:mb-6'>
                        <span className='title lg:mb-6'>WEB DEVELOPMENT</span>
                        <h3 className='text-[30px] lg:text-[40px]'>BTN Group design system</h3>
                    </div>
                    <div className='text wow fadeInUp lg:mb-9 dark:text-gray-400 text-gray-600'>
                        <div>
                            <section className='markdown'>Following the specifications of BTN Group Design, we built an interactive user interface.</section>
                            <h2 class="dark:text-white text-xl py-3 text-gray-800">
                                <span>
                                    <font>
                                        <font>✨ Tính năng</font>
                                    </font>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-0 py-10 lg:py-0 lg:mb-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 '>
                <div className='self-center'>
                    <div className='title lg:mb-6'>
                        <span className='title lg:mb-6'>WEB DEVELOPMENT</span>
                        <h3 className='text-[30px] lg:text-[40px]'>BTN Group design system</h3>
                    </div>
                    <div className='text wow fadeInUp lg:mb-9 dark:text-gray-400 text-gray-600'>
                        <div>
                            <section className='markdown'>Following the specifications of BTN Group Design, we built an interactive user interface.</section>
                            <h2 class="dark:text-white text-xl py-3 text-gray-800">
                                <span>
                                    <font>
                                        <font>✨ Tính năng</font>
                                    </font>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <a className='relative  self-center'>
                    <div className='will-change'>
                        <img alt='product' width="650" height="315" src={portfolioSecond}/>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
}

export default Portfolio;