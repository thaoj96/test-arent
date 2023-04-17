import React, { useState } from "react";
import {
  IconChallenge,
  IconInfo,
  IconLogo,
  IconMemo,
  IconMenu,
} from "../Icons/headerIcon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const ItemMenu = [
    {
      icon: <IconMemo />,
      text: "自分の記録",
      onClick: () => navigate("/detail"),
    },
    {
      icon: <IconChallenge />,
      text: "チャレンジ",
      onClick: () => navigate("/detail"),
    },
    {
      icon: <IconInfo />,
      text: "お知らせ",
      onClick: () => navigate("/detail"),
      showNumber: 1,
    },
    {
      icon: <IconMenu />,
      onClick: () => setShowMenu(true),
    },
  ];
  return (
    <div
      className="flex-row main-header"
      style={{ justifyContent: "space-between" }}
    >
      <IconLogo />
      <div className="flex-row">
        {ItemMenu?.map((item, index) => (
          <div
            key={index.toString()}
            onClick={item.onClick}
            className="item-header flex-row"
          >
            {item.showNumber && (
              <span className="item-header-number">{item.showNumber}</span>
            )}
            <span>{item.icon}</span>
            {item.text && (
              <span
                style={{ marginLeft: 8, color: index === 0 ? "#FF963C" : "" }}
              >
                {item.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Header;
