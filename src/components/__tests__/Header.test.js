import { render } from "@testing-library/react";
import Header from "../Head";
import { Provider } from "react-redux";
import myStore from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
test("Logo Should load on render", () => {
  const head = render(
    <StaticRouter>
      <Provider store={myStore}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(head);
  const logo = head.getAllByTestId("logo");
  console.log(typeof logo);
  console.log(logo[0].src);
});
test("Test for Online Status", () => {
  const head = render(
    <StaticRouter>
      <Provider store={myStore}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const Online = head.getByTestId("status");
  console.log(Online);
  expect(Online.src).toBe(
    "https://static.wixstatic.com/media/4ea17e_a962cd2cf30b4c01a8d76b9629b42148~mv2.gif"
  );
  
});
