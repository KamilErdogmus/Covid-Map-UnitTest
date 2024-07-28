import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import Detail from "./../pages/Detail/Detail";
import React from "react";
import { ex_data } from "./../constant";
import millify from "millify";
//! test ortamındaki sahte store'un krulumunu yap
const mockStore = configureStore([thunk]);

test("Loader components are displayed on the screen during the loading state.", () => {
  const store = mockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </BrowserRouter>
  );
  screen.getByTestId("header-loader");
  expect(screen.queryAllByTestId("card-loader")).toHaveLength(0);
});

test("Error components are displayed on the screen in case of an error.", () => {
  const store = mockStore({
    isLoading: false,
    isError: "404 not found",
    data: ex_data,
  });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </BrowserRouter>
  );

  screen.getByText(/404 not found/i);
});
test("Country information and cards are displayed on the screen.", () => {
  const store = mockStore({
    isLoading: false,
    isError: null,
    data: ex_data,
  });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </BrowserRouter>
  );

  //! 1- Ülke detayları
  //* Ülke ismi ekrana geliyor mu?
  const header = screen.getByRole("heading", { name: /Russia/i });
  expect(header).toBeInTheDocument();
  //^ ekrandaki resmi al
  const img = screen.getByRole("img");
  //? resmin kaynağı doğru mu?
  expect(img).toHaveProperty("src", ex_data.country.flags.png);

  //! 2- Kartlar ekrana geliyor mu?
  //* covid nesnesini diziye çevir
  const arr = Object.entries(ex_data.covid);

  arr.forEach((item) => {
    //^ başlık ekrana geldi mi ?
    screen.getByText(item[0].split("_").join(" "));
    //& değer ekrana geldi mi ?
    const expectedValue =
      typeof item[1] === "number" ? millify(item[1]) : item[1];

    //~ Eğer değer sayısal ise, millify dönüşümünü kontrol edin
    const elements = screen.queryAllByText(expectedValue);
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
