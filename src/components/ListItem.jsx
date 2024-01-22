import React from "react";

const ListItem = ({ clickEvent , listItemText, ListItemStyle }) => {
  return (
    <li onClick={clickEvent} className={`${ListItemStyle} text-base leading-7 text-[#8E9A9D] capitalize`}>
      {listItemText}
    </li>
  );
};

export default ListItem;
