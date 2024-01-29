//import libraries needed for testing
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

//import the component you wrote
import Article from "../components/Article";

//test the component
test("displays the text 'please pass this test'", () => {
  render(<Article />);

  const element = screen.queryByText("please pass this test");

  screen.debug(element)

  expect(element).toBeInTheDocument();
  // expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
