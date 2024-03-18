// const temp = window.document.querySelector(".root");
// console.log(temp);
// const heading = window.document.createElement("h1");
// heading.innerText = "Injected by Javascript";
// temp.appendChild(heading);
// console.log(temp);

const temp = React.createElement("h1", {}, "Injected by React");
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(temp);
root.render