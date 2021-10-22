import { render, screen } from "@testing-library/react";
import FileList from "./FileList";

it("should show Empty list if no files are provided", () => {
  render(<FileList />);

  expect(screen.getByText("Empty List")).toBeInTheDocument();
});

it("should show Empty list is files are empty", () => {
  render(<FileList files={[]} />);

  expect(screen.getByText("Empty List")).toBeInTheDocument();
});

it("should render the files", () => {
  render(
    <FileList
      files={[
        { id: 0, name: "file 1", isDirectory: false },
        { id: 1, name: "file 2", isDirectory: false },
      ]}
    />
  );

  expect(screen.getByText("file 1")).toBeInTheDocument();
  expect(screen.getByText("file 2")).toBeInTheDocument();
});
