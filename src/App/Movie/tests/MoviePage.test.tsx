import { screen } from "@testing-library/react";
import { render } from "@/testing-setup/testUtils.tsx";
import { MoviePage } from "@/App/Movie/MoviePage.tsx";

describe("MoviePage", () => {
  test("renders MoviePage component", () => {
    render(<MoviePage />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("displays movie details correctly", async () => {
    //for some reason movie and config are not populated
    render(<MoviePage />);

    expect(await screen.findByText(/The First Omen/i)).toBeInTheDocument();
    expect(screen.getByText(/2024-04-03/i)).toBeInTheDocument();
    expect(screen.getByText(/en/i)).toBeInTheDocument();
    expect(screen.getByText(/2029.6/i)).toBeInTheDocument();
    expect(screen.getByText(/323/i)).toBeInTheDocument();
    expect(screen.getByText(/6.8/i)).toBeInTheDocument();
  });
});
