const heading1 = React.createElement(
  "h1",
  { class: "heading " },
  "Injected By React"
);
const heading2 = React.createElement(
  "h2",
  { class: "heading" },
  "Welcome to React"
);

const container = React.createElement("div", { class: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(container);
