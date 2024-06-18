export default function AccordionItem({
  title,
  num,
  onOpenItem,
  curOpen,
  children,
}) {
  const isOpen = num === curOpen;

  return (
    <li
      className={`${isOpen && "open"}  item  `}
      onClick={() => onOpenItem(isOpen ? null : num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box ">{children}</div>}
    </li>
  );
}
