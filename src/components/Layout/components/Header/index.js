import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import styles from './Header.module.scss'
import images from "~/assets/images";
import NavMobile from './NavMobile'

const cx = classNames.bind(styles);


function Header() {
    const navLink = [
        {
          title: "Home",
          link: "#home",
        },
        {
          title: "About",
          link: "#about",
        },
        {
          title: "Portfolio",
          link: "#portfolio",
        },
        {
          title: "Skills",
          link: "#skills",
        },
        {
          title: "Experiences",
          link: "#experiences",
        },
        {
          title: "Contact",
          link: "#contact-me",
        },
    ];

    const[isCrolled, setIsCrolled] = useState(false);
    const [selectedLink, setSelectedLink] = useState("#home");
    const [showNavMobile, setShowNavMobile] = useState(false);

    const onSelectLink = (link) => {
    setSelectedLink(link);
    };

    const onOpenNavMobile = () => {
    setShowNavMobile(true);
    };

   useEffect(()=>{
    const handleScroll  = () =>{
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsCrolled(scrollTop>0);
    };

    window.addEventListener('scroll', handleScroll);

    return ()=>{
        window.removeEventListener('scroll', handleScroll)
    }
   },[])

    return <header className={cx('wrapper',{'srolled':isCrolled})}>
        <div className={cx('inner', 'd-flex', 'justify-bettween')}>
            <div className={cx('logo')}>
                {/* <img src={images.logo} alt="Hoàng"/> */}
                <span>PORTFOILIO</span>
            </div>
            <nav
                aria-label="Site Nav"
                className="hidden gap-8 text-sm font-medium md:flex"
              >
                {navLink.map((nav, index) => (
                    <a
                        className={`hover:text-primary ${
                        selectedLink === nav.link ? "text-primary" : ""
                        }`}
                        href={nav.link}
                        onClick={() => onSelectLink(nav.link)}
                        key={`nav-link-${index}`}
                    >
                        {nav.title}
                    </a>
                ))}
            </nav>
            <div className={cx('d-flex', 'group-btn' ,'align-center', 'sm:flex', 'hidden')}>
                <div className="download">
                    <Button primary download>Download CV</Button>
                </div> 
            </div>
            <div className="lg:hidden justify-end  items-center gap-4">
                <Button
                  className="rounded-lg bg-gray-100 p-2 text-gray-600"
                  type="button"
                  onClick={onOpenNavMobile}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </Button>
            </div>
        </div>
        <NavMobile
            onSelectLink={onSelectLink}
            navLinks={navLink}
            isShow={showNavMobile}
            selectedLink={selectedLink}
            onHide={() => {
                setShowNavMobile(false);
            }}
        />
    </header>
}

export default Header;
