import { useState } from "react";

import AccordionItem from "./AccordionItem";

export default function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <ul className="accordion  ">
      {faqs.map((item, i) => (
        <AccordionItem
          key={item.title}
          onOpenItem={setCurOpen}
          title={item.title}
          num={i + 1}
          curOpen={curOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </ul>
  );
}
