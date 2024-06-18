import { useState } from "react";

export default function AccordionItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className={`${isOpen && "open"}  item  `}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box ">{item.text}</div>}
    </li>
  );
}
