// import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
// import App from "./App";
import Homepage from "../src/pages/Homepage";

test("render component without crashing", async () => {
  const history = createMemoryHistory();
  const { baseElement } = render(
    <Router history={history}>
      <Homepage />
    </Router>
  );

  await act(async () => {
    expect(baseElement).toBeDefined();
  });
});

describe("Divided operation", () => {
  const setup = () => {
    const history = createMemoryHistory();
    const wrapper = render(
      <Router history={history}>
        <Homepage />
      </Router>
    );
    const numbers1 = wrapper.getByLabelText("numbers0");
    const numbers2 = wrapper.getByLabelText("numbers1");
    const numbers3 = wrapper.getByLabelText("numbers2");

    const checks1 = wrapper.getByLabelText("checks0");
    const checks2 = wrapper.getByLabelText("checks1");
    const checks3 = wrapper.getByLabelText("checks2");

    const buttonDistribute = wrapper.getByLabelText("button-distribute");
    const resultField = wrapper.getByLabelText("result");

    return {
      numbers1,
      numbers2,
      numbers3,
      checks1,
      checks2,
      checks3,
      buttonDistribute,
      resultField,
      ...wrapper,
    };
  };

  it("action divided 2 number", async () => {
    const {
      numbers1,
      numbers2,
      // numbers3,
      checks1,
      checks2,
      // checks3,
      buttonDistribute,
      resultField,
    } = setup();

    fireEvent.change(numbers1, { target: { value: 3 } });
    expect((numbers1 as HTMLInputElement).value).toBe("3");

    fireEvent.change(numbers2, { target: { value: 3 } });
    expect((numbers2 as HTMLInputElement).value).toBe("3");

    fireEvent.click(checks1);
    fireEvent.click(checks2);

    fireEvent.click(buttonDistribute);

    expect((resultField as HTMLInputElement).value).toBe("1");
  });

  it("action divide 3 number", async () => {
    const {
      numbers1,
      numbers2,
      numbers3,
      checks1,
      checks2,
      checks3,
      buttonDistribute,
      resultField,
    } = setup();

    fireEvent.change(numbers1, { target: { value: 5 } });
    expect((numbers1 as HTMLInputElement).value).toBe("5");

    fireEvent.change(numbers2, { target: { value: 5 } });
    expect((numbers2 as HTMLInputElement).value).toBe("5");

    fireEvent.change(numbers3, { target: { value: 1 } });
    expect((numbers3 as HTMLInputElement).value).toBe("1");

    fireEvent.click(checks1);
    fireEvent.click(checks2);
    fireEvent.click(checks3);
    // fireEvent.change(check1, { target: { checked: true } });
    // expect((check1 as HTMLInputElement).checked).toBe(true);
    // fireEvent.change(check2, { target: { checked: true } });

    fireEvent.click(buttonDistribute);

    expect((resultField as HTMLInputElement).value).toBe("1");
  });

  it("action divide 3 number but not check field 3", async () => {
    const {
      numbers1,
      numbers2,
      numbers3,
      checks1,
      checks2,
      // check3,
      buttonDistribute,
      resultField,
    } = setup();

    fireEvent.change(numbers1, { target: { value: 10 } });
    expect((numbers1 as HTMLInputElement).value).toBe("10");

    fireEvent.change(numbers2, { target: { value: 2 } });
    expect((numbers2 as HTMLInputElement).value).toBe("2");

    fireEvent.change(numbers3, { target: { value: 5 } });
    expect((numbers3 as HTMLInputElement).value).toBe("5");

    fireEvent.click(checks1);
    fireEvent.click(checks2);
    // fireEvent.click(check3);

    fireEvent.click(buttonDistribute);

    expect((resultField as HTMLInputElement).value).toBe("5");
  });
});

describe("Plus operation", () => {
  const setup = () => {
    const history = createMemoryHistory();
    const wrapper = render(
      <Router history={history}>
        <Homepage />
      </Router>
    );
    const number1 = wrapper.getByLabelText("numbers0");
    const number2 = wrapper.getByLabelText("numbers1");
    const number3 = wrapper.getByLabelText("numbers2");

    const check1 = wrapper.getByLabelText("checks0");
    const check2 = wrapper.getByLabelText("checks1");
    const check3 = wrapper.getByLabelText("checks2");

    const buttonPlus = wrapper.getByLabelText("button-plus");
    const resultField = wrapper.getByLabelText("result");

    return {
      number1,
      number2,
      number3,
      check1,
      check2,
      check3,
      buttonPlus,
      resultField,
      ...wrapper,
    };
  };

  it("action plus 2 number", async () => {
    const {
      number1,
      number2,
      // number3,
      check1,
      check2,
      // check3,
      buttonPlus,
      resultField,
    } = setup();

    fireEvent.change(number1, { target: { value: 2 } });
    expect((number1 as HTMLInputElement).value).toBe("2");

    fireEvent.change(number2, { target: { value: 3 } });
    expect((number2 as HTMLInputElement).value).toBe("3");

    fireEvent.click(check1);
    fireEvent.click(check2);
    // fireEvent.change(check1, { target: { checked: true } });
    // expect((check1 as HTMLInputElement).checked).toBe(true);
    // fireEvent.change(check2, { target: { checked: true } });

    fireEvent.click(buttonPlus);

    expect((resultField as HTMLInputElement).value).toBe("5");
  });

  it("action plus 3 number", async () => {
    const {
      number1,
      number2,
      number3,
      check1,
      check2,
      check3,
      buttonPlus,
      resultField,
    } = setup();

    fireEvent.change(number1, { target: { value: 2 } });
    expect((number1 as HTMLInputElement).value).toBe("2");

    fireEvent.change(number2, { target: { value: 2 } });
    expect((number2 as HTMLInputElement).value).toBe("2");

    fireEvent.change(number3, { target: { value: 6 } });
    expect((number3 as HTMLInputElement).value).toBe("6");

    fireEvent.click(check1);
    fireEvent.click(check2);
    fireEvent.click(check3);

    fireEvent.click(buttonPlus);

    expect((resultField as HTMLInputElement).value).toBe("10");
  });

  it("action plus 3 number but not check field 3", async () => {
    const {
      number1,
      number2,
      number3,
      check1,
      check2,
      // check3,
      buttonPlus,
      resultField,
    } = setup();

    fireEvent.change(number1, { target: { value: 2 } });
    expect((number1 as HTMLInputElement).value).toBe("2");

    fireEvent.change(number2, { target: { value: 2 } });
    expect((number2 as HTMLInputElement).value).toBe("2");

    fireEvent.change(number3, { target: { value: 6 } });
    expect((number3 as HTMLInputElement).value).toBe("6");

    fireEvent.click(check1);
    fireEvent.click(check2);
    // fireEvent.click(check3);

    fireEvent.click(buttonPlus);

    expect((resultField as HTMLInputElement).value).toBe("4");
  });

  it("show alert if just less than 2 check number", async () => {
    const {
      number1,
      check1,
      // check2,
      // check3,
      buttonPlus,
      // resultField,
    } = setup();
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    fireEvent.change(number1, { target: { value: 2 } });
    expect((number1 as HTMLInputElement).value).toBe("2");

    // fireEvent.change(number2, { target: { value: 2 } });
    // expect((number1 as HTMLInputElement).value).toBe("2");

    fireEvent.click(check1);
    // fireEvent.click(check2);

    fireEvent.click(buttonPlus);

    // expect((resultField as HTMLInputElement).value).toBe("4");
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
