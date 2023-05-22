import { useState, useRef, useEffect } from "react";
import { FiSearch, FiMail } from "react-icons/fi";
import { SlScreenSmartphone } from "react-icons/sl";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const inputRef: any = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div className="w-full">
      <div className="flex px-48 justify-between items-center p-4 shadow bg-[#DFF6FF]">
        <h6 className="text-sm">
          <a href="tel:09798065880" className="flex items-center gap-1">
            <SlScreenSmartphone fontSize={18} color="#015EB9" />
            +959 7980 65880
          </a>
        </h6>
        <h6 className="text-sm">
          <a href="/">
            UPDATES – Click Here for KBZ Money News Alerts – UPDATES
          </a>
        </h6>
        <h6 className="text-sm">
          <a
            href="mailto: admin@kbzmoney.com"
            className="flex items-center gap-2"
          >
            admin@kbzmoney.com
            <FiMail fontSize={18} color="#015EB9" />
          </a>
        </h6>
      </div>
      <div className="flex px-48 justify-between items-center shadow bg-white">
        <div className="flex items-center">
          <a href="/">
            <img src="/assets/logo.svg" alt="logo" width={200} height={200} />
          </a>
          <ul className="flex items-center ml-20 gap-8">
            <li className="pb-7 mt-8 px-1 border-b-4 border-[#015EB9] font-[500] text-[#015EB9]">
              <a href="/"> Home </a>
            </li>
            <li className="py-7 px-4 font-[500]">
              <a href="/blog"> Blog </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <input
            ref={inputRef}
            autoFocus={open}
            style={{ display: open ? "flex" : "none" }}
            type="search"
            placeholder="Search here"
            className="py-2 px-3 text-lg mr-4 border-2 rounded-md"
          ></input>
          <FiSearch fontSize="26px" cursor="pointer" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
