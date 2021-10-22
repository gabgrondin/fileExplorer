import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Layout from "./Layout";

it("should render the folders", () => {
  render(<Layout folders={[{ id: 0, path: "test", files: [] }]} />);

  expect(screen.getByText("test")).toBeInTheDocument();
});

it("should change folder selection", () => {
  render(
    <Layout
      folders={[
        { id: 0, path: "test", files: [] },
        {
          id: 1,
          path: "test 2",
          files: [{ id: 0, name: "file 1", isDirectory: false }],
        },
      ]}
    />
  );

  expect(screen.queryByText("file 1")).not.toBeInTheDocument();

  userEvent.click(screen.getByText("test 2"));

  expect(screen.getByText("file 1")).toBeInTheDocument();
});
