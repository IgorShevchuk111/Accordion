import AccordionItem from "./AccordionItem";

export default function Accordion({ faqs }) {
  return (
    <ul className="accordion  ">
      {faqs.map((item, i) => (
        <AccordionItem key={item.title} item={item} index={i} />
      ))}
    </ul>
  );
}
