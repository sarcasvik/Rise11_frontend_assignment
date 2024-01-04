import React, { useState } from "react";
import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`bg-slate-800 flex-none w-14 sm:w-20 h-screen ${isMenuOpen ? 'm-0 w-full max-w-screenvw h-screen min-h-screen ' : 'w-14'}`}>
      <div className="h-20 items-center flex">
        {isMenuOpen ? (
          <XIcon width={40} className="text-gray-300 left-3 sm:left-6 fixed cursor-pointer" onClick={toggleMenu} />
        ) : (
          <MenuIcon width={40} className="text-gray-300 left-3 sm:left-6 fixed cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
      {isMenuOpen && (
        <div className="fixed left-14 top-[100px]">
          <MenuItem title="Home" icon={<HomeIcon width={40} />} />
          <MenuItem title="Chart" icon={<ChartBarIcon width={40} />} />
          <MenuItem title="Search" icon={<DocumentSearchIcon width={40} />} />
          <MenuItem title="Mail" icon={<MailIcon width={40} />} />
          <MenuItem title="Credit Card" icon={<CreditCardIcon width={40} />} />
          <MenuItem title="Bell" icon={<BellIcon width={40} />} />
        </div>
      )}
      {isMenuOpen && (
        <div className="fixed bottom-4 left-14">
          <MenuItem title="Scroll to Top" icon={<ArrowUpIcon width={40} />} />
          <MenuItem title="External Link" icon={<ExternalLinkIcon width={40} />} />
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ title, icon }) => (
  <div className="flex items-center mb-4">
    {icon}
    <span className="ml-2 text-gray-300">{title}</span>
  </div>
);

export default Sidebar;
