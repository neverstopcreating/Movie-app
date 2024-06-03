import { fireEvent, screen, waitFor } from "@testing-library/react";
import { MovieListPage } from "@/App/MovieList/MovieListPage.tsx";
import { render } from "@/testing-setup/testUtils.tsx";

describe("MovieListPage", () => {
  test("renders MovieListPage component", () => {
    render(<MovieListPage />);

    expect(screen.getByText(/movies/i)).toBeInTheDocument();
  });

  test("fetches movies and config on load", async () => {
    render(<MovieListPage />);

    expect(
      await screen.findByText(/Kingdom of the Planet of the Apes/i),
    ).toBeInTheDocument();
  });

  test("dispatches search action on search input", async () => {
    render(<MovieListPage />);

    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: "The First Omen" } });
    fireEvent.submit(searchInput);

    expect(await screen.findByText(/The First Omen/i)).toBeInTheDocument();
  });

  test("switches to table view when table view button is clicked", async () => {
    render(<MovieListPage />);

    const tableViewButton = screen.getByLabelText(/table view/i);
    fireEvent.click(tableViewButton);

    expect(
      await screen.findByText(/Kingdom of the Planet of the Apes/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  // Can not identify html component fot the buttons on the page
  test("handles pagination correctly", async () => {
    render(<MovieListPage />);

    const paginationButtons = screen.getAllByRole("button");
    const secondPageButton = paginationButtons.find(button => button.textContent === "2");

    if (secondPageButton) {
      fireEvent.click(secondPageButton);
    }

    await waitFor(() => {
      expect(screen.getByText(/page 2/i)).toBeInTheDocument();
    });
  });

});
