// Libraries
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "instant", // Use 'instant' behavior for immediate scrolling
    };
    window.scrollTo(scrollOptions);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
