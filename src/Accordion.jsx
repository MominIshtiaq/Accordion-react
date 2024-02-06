import { useState } from "react";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <section className="accordion_card">
        <div className="header" onClick={() => setIsActive(!isActive)}>
          <div className="card_title">{title}</div>
          <p className="icon">{isActive ? "-" : "+"}</p>
        </div>
        <div className="content">
          {isActive && <p className="card_info">{content}</p>}
        </div>
      </section>
    </>
  );
};

export default Accordion;
