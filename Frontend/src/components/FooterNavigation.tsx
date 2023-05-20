import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { BsCalendarWeek } from "react-icons/bs";

const FooterNavigation = () => {
  return (
    <div className="navFooterContainer">
      <div className="navFooterIcons">
        <a href="/profile">
          <CgProfile />
        </a>
        <a href="/friends">
          <FaUserFriends />
        </a>
        <a href="/chat">
          <BsFillChatFill />
        </a>
        <a href="/calendar">
          <BsCalendarWeek />
        </a>
        <a href="/settings">
          <IoSettingsOutline />
        </a>
        <a href="/">
          <FaSignOutAlt />
        </a>
      </div>
    </div>
  );
};

export default FooterNavigation;
