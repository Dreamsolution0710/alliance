import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./AppRouter";
import { Commet } from "react-loading-indicators";
import ScrollUpTo from "./components/landingpage/ScrollUpTo";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoModal from "./components/utils/VideoModal";
import { VideoProvider } from "./components/products/VideoContext";

function App() {
  const [isloading, setIsloading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsloading(true);
    const timer = setTimeout(() => {
      setIsloading(false);
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isloading ? (
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-center lg:scale-150">
            <Commet
              color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]}
              size="large"
              textColor=""
            />
            <p
              className={`uppercase lg:text-[32px] text-[#54c1e5]  font-medium tracking-[0.025em] animate-text-reveal bg-gradient-to-r from-[#54c1e5] to-[#33CCCC] bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300 ease-in-out
                ${showContent ? "translate-y-0" : "translate-y-4"}`}
              style={{
                animationDelay: "0.5s",
                animationDuration: "1s",
                textShadow: "0 0 20px rgba(84, 193, 229, 0.3)",
              }}
            >
              alliance plastics
            </p>
          </div>
        </div>
      ) : (
        <div className={`relative`}>
          <div
            className={`opacity-0 ${
              showContent
                ? "animate-fade animate-duration-1000 animate-ease-linear opacity-100"
                : ""
            }`}
          >
            <Header />
            <VideoProvider>
              <AppRouter />
              <VideoModal />
            </VideoProvider>
            <ScrollUpTo />
            <Footer />
            {/* <div className="fixed bg-[url(/assets/images/background.webp)] top-0 bottom-0 left-0 right-0 z-[-1]"></div> */}
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;
