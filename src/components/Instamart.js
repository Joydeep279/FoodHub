import { useState } from "react";
import Section from "./Accordian";
const Instamart = () => {
  const [view, setView] = useState("");
  return (
    <div className="flex flex-col justify-between gap-10">
      <Section
        title={"Team"}
        desc={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
