// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerText = "Welcome to React";
// root.appendChild(heading);

const heading = React.createElement(
  "h1",
  {
    id: "idInjected",
    className: "classInjected",
  },
  "Injected by React"
);
console.log(heading);
const temp = ReactDOM.createRoot(document.getElementById("root"));

console.log(temp);

temp.render(heading);
