import "@testing-library/jest-dom";
import React from "react";
import { waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import UserList from "../src/app/components/UserList";
import { renderWithProviders } from "./setup";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
  }),
}));

describe("UserList", () => {
  it("should render the loading state", async () => {
    renderWithProviders(<UserList />, {
      preloadedState: {
        user: {
          users: [],
          loading: true,
          selectedUser: null,
          error: "",
        },
      },
    });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render the error state", async () => {
    renderWithProviders(<UserList />, {
      preloadedState: {
        user: {
          users: [],
          loading: false,
          selectedUser: null,
          error: "An error occurred",
        },
      },
    });
    await waitFor(() => {
      expect(screen.getByText("An error occurred")).toBeInTheDocument();
    });
  });

  it("should render the empty state", async () => {
    renderWithProviders(<UserList />, {
      preloadedState: {
        user: {
          users: [],
          loading: false,
          selectedUser: null,
          error: "",
        },
      },
    });
    await waitFor(() => {
      expect(screen.getByText("No users found")).toBeInTheDocument();
    });
  });

  it("should render the list of users", async () => {
    renderWithProviders(<UserList />);
    await waitFor(() => {
      expect(screen.getByText("Ashtyn Bogan")).toBeInTheDocument();
      expect(screen.getByText("Alison Hartmann")).toBeInTheDocument();
      expect(screen.getByText("Loma Littel")).toBeInTheDocument();
    });
  });
});
