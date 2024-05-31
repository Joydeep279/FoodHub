import { useState } from "react";
import Section from "./Accordian";
const Instamart = () => {
  const [view, setView] = useState("");
  return (
    <div className="flex flex-col justify-between gap-10">
      <Section
        title={"Team"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        setView={setView}
        view={view === "Team"}
      />
      <Section
        title={"InstaMart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        setView={setView}
        view={view === "InstaMart"}
      />
      <Section
        title={"Members"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        setView={setView}
        view={view === "Members"}
      />
    </div>
  );
};
export default Instamart;
