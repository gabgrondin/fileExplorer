import { render, screen } from "@testing-library/react";
import File from "./File";

it("should show the file name", () => {
  render(<File file={{ id: 0, name: "test", isDirectory: false }} />);

  expect(screen.getByText("test")).toBeInTheDocument();
});

it("should show a directory icon", () => {
  render(<File file={{ id: 0, name: "test", isDirectory: true }} />);

  expect(screen.getByTestId("directory-icon")).toBeInTheDocument();
  expect(screen.queryByTestId("file-icon")).not.toBeInTheDocument();
});

it("should show a file icon", () => {
  render(<File file={{ id: 0, name: "test", isDirectory: false }} />);

  expect(screen.getByTestId("file-icon")).toBeInTheDocument();
  expect(screen.queryByTestId("directory-icon")).not.toBeInTheDocument();
});
