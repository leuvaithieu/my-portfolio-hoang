import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  outline = false,
  primary = false,
  onClick,
  children,
  isDownloadable = false, // Thêm prop isDownloadable
  filename, // Thêm prop filename
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", "btn", {
    primary,
    outline,
    download: isDownloadable, // Sử dụng prop isDownloadable để kiểm soát lớp CSS
  });

  const handleDownload = () => {
    const data = 'Hello';
    const blob = new Blob([data], { type: 'text/plain' });

    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);

    downloadLink.download = filename || 'my-cv.txt';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <Comp
      className={classes}
      onClick={isDownloadable ? handleDownload : onClick}
      {...props}
    >
      <span className={cx('title-btn')}>{children}</span>
    </Comp>
  );
}

export default Button;
