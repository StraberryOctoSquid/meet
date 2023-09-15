/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import NumberofEvents from "../components/NumberofEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberofEvents /> component", () => {
  let NumberofEventsComponent;
  beforeEach(() => {
    NumberofEventsComponent = render(<NumberofEvents />);
  });

  test("renders text input", () => {
    const NumberofEventsTextBox = NumberofEventsComponent.queryByRole(
      "textbox"
    );
    expect(NumberofEventsTextBox).toBeInTheDocument();
    expect(NumberofEventsTextBox).toHaveClass("NumberofEvents");
  });

  test("renders default value of 32", () => {
    const NumberofEventsTextBox = NumberofEventsComponent.queryByRole(
      "textbox"
    );
    expect(NumberofEventsTextBox.value).toBe("32");
  });

  test("textbox value changes when user types in it", async () => {
    const input = NumberofEventsComponent.queryByRole("textbox");
    await userEvent.type(input, '{backspace}{backspace}10');
    expect(input).toHaveValue("10");


  });

  // test("renders error message when user enters a value less than 1", () => {
  //   const NumberofEventsTextBox = NumberofEventsComponent.queryByRole(
  //     "textbox"
  //   );
  //   NumberofEventsTextBox.value = 0;
  //   expect(NumberofEventsTextBox.value).toBe("0");
  // });

  // test("renders error message when user enters a value greater than 50", async () => {
  //   const NumberofEventsTextBox = NumberofEventsComponent.queryByRole(
  //     "textbox"
  //   );
  //   const user = userEvent.setup();
  //   await user.type(NumberofEventsComponent, '{backspace}{backspace}10');
  //   expect(NumberofEventsTextBox.value).toBe("51");
  //   expect(alert).toBeCalledWith("Please enter a number between 1 and 50");
  // });

  // test("renders error message when user enters a non-numeric value", () => {
  //   const NumberofEventsTextBox = NumberofEventsComponent.queryByRole(
  //     "textbox"
  //   );
  //   NumberofEventsTextBox.value = "abc";
  //   expect(NumberofEventsTextBox.value).toBe("abc");
  // });

  // test("renders error message when user enters a blank value", () => {
  //   const NumberofEventsTextBox = NumberofEventsComponent.queryByRole(
  //     "textbox"
  //   );
  //   NumberofEventsTextBox.value = "";
  //   expect(NumberofEventsTextBox.value).toBe("");
  // });
});