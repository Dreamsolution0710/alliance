import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  AdjustmentsVerticalIcon,
  Bars3Icon,
  CalculatorIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  RectangleGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./../landingpage/style.css";

const products = [
  {
    name: "Films",
    href: "/products/films",
    icon: RectangleGroupIcon,
  },
  {
    name: "Edgeguard",
    href: "/products/edges",
    icon: AdjustmentsVerticalIcon,
  },
];

const company = [
  {
    name: "About US",
    href: "/ourcompany",
    icon: ChartPieIcon,
  },
  {
    name: "Calculator",
    href: "/calculator",
    icon: CalculatorIcon,
  },
  {
    name: "Learn About Our Commitment To Dury",
    href: "/commitment",
    icon: CursorArrowRaysIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPostion, setScrollPosition] = useState(0);

  const handleCall = () => {
    window.location.href = "tel:+18886431432";
  };
  const handleEmail = () => {
    window.location.href = "mailto:info@allianceplastics.net";
  };

  useEffect(() => {
    const handleScroll = () => {
      Math.abs(scrollPostion - window.scrollY) < 100
        ? setScrollPosition(scrollPostion)
        : setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPostion]);

  return (
    <header
      className={`relative bg-gray-100 sticky top-0 z-100 ${
        scrollPostion < 100
          ? ""
          : "shadow-md transition-all duration-400 ease-in-out"
      }`}
    >
      <nav
        aria-label="Global"
        className={`mx-auto flex max-w-[1200px] items-center justify-between py-6 px-3 bg-gray-100 transition-all duration-200 ease-linear ${
          scrollPostion < 100 ? "lg:py-10" : ""
        }`}
      >
        <div className="flex lg:flex-1 ">
          <Link
            to="/"
            className={`-m-1.5 p-1.5 flex md:scale-125 transition-all duration-300 ease-linear ${
              scrollPostion < 100 ? "lg:scale-200" : "lg:scale-150"
            }`}
          >
            <img
              alt=""
              src="/assets/images/splash_logo.png"
              className="h-8 w-auto logo"
            />

            {/* <img
              alt=""
              src="/assets/images/logoalliance1.webp"
              className="h-8 w-auto logo"
            /> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          <Link
            to="/"
            className="text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]"
          >
            Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]  hover:cursor-pointer">
              Products
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-[250px]  overflow-hidden bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-2">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-4 rounded-lg p-2 text-md/6 hover:text-[#54c1e5]"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg text-orange-500 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900 hover:text-[#54c1e5]"
                      >
                        {item.name}
                        {/* <span className="absolute inset-0" /> */}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]  hover:cursor-pointer">
              Our Company
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-[250px]  overflow-hidden bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-2">
                {company.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-4 rounded-lg p-2 text-md/6 hover:text-[#54c1e5]"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg text-orange-500 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900 hover:text-[#54c1e5]"
                      >
                        {item.name}
                        {/* <span className="absolute inset-0" /> */}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          {/* <Link
            to="/ourcompany"
            className="text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]"
          >
            About Us
          </Link> */}
          <Link
            to="/academy"
            className="text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]"
          >
            Alliance Academy
          </Link>
          <Link
            to="/news"
            className="text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]"
          >
            News
          </Link>
          <Link
            to="/contactus"
            className="text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]"
          >
            Contact Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex flex-cols space-x-3">
            <Link
              className="p-3 border border-solid border-gray-500 hover:bg-gray-100 flex items-center justify-center hover:cursor-pointer"
              onClick={handleCall}
            >
              <FaPhone className="text-gray-700 text-lg" />
            </Link>
            <Link
              className="p-3 border border-solid border-gray-500 hover:bg-gray-100 flex items-center justify-center hover:cursor-pointer"
              onClick={handleEmail}
            >
              <FaEnvelope className="text-gray-700 text-lg" />
            </Link>
            <Link
              to={"/contactus"}
              className="p-3 border border-solid border-gray-500 hover:bg-gray-100 flex items-center justify-center"
            >
              <FaMapMarkerAlt className="text-gray-700 text-lg" />
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="/assets/images/logoalliance.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:!text-orange-500"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3 ">
                  <DisclosureButton className="group flex w-full hover:cursor-pointer items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:text-[#54c1e5]">
                    Products
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:text-[#54c1e5]"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/ourcompany"
                  className="text-md/6 font-semibold text-gray-900 hover:text-[#54c1e5]"
                >
                  About Us
                </Link>
                {/* <Disclosure as="div" className="-mx-3 ">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:text-[#54c1e5] hover:cursor-pointer">
                    Tools
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {tools.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:text-[#54c1e5]"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}
                <Link
                  to="/academy"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-[#54c1e5]"
                >
                  Alliance Academy
                </Link>
                <Link
                  to="/news"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-[#54c1e5]"
                >
                  News
                </Link>
                <Link
                  to="/contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-[#54c1e5]"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <div className="space-x-3">
                  <button
                    className="p-3 border rounded-lg hover:bg-gray-100 flex items-center justify-center"
                    onClick={handleCall}
                  >
                    <FaPhone className="text-gray-700 text-lg" />
                    <span className="text-gray-700">+1 888-643-1432</span>
                  </button>
                  <button
                    className="p-3 border rounded-lg hover:bg-gray-100 flex items-center justify-center"
                    onClick={handleEmail}
                  >
                    <FaEnvelope className="text-gray-700 text-lg" />
                    <span className="text-gray-700">
                      Rock Hill, SC * Green Bay, WI
                      <br /> Dallas, TX * Las Vegas, NV
                    </span>
                  </button>
                  <button className="p-3 border rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-gray-700 text-lg" />
                    <span className="text-gray-700">
                      info@allianceplastics.net
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
