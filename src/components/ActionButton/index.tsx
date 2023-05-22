import { FunctionComponent } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface IProps {
  title: string;
  route?: string;
}

const ActionButton: FunctionComponent<IProps> = ({ title, route }) => {
  return (
    <a
      href={route || "/"}
      className="mt-4 w-fit text-white font-[500] flex items-center gap-2 bg-[#FF545F] rounded-full px-6 py-2"
    >
      {title}
      <HiOutlineArrowNarrowRight fontSize="24px" />
    </a>
  );
};

export default ActionButton;
