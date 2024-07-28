import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const covidURL = "https://covid-19-statistics.p.rapidapi.com/reports";

const headers = {
  "x-rapidapi-key":
    "221c395b57msh5a43f7ed21d8285p1bc2acjsna153f5afe69e",
  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
};

const getData = createAsyncThunk(
  "covid/getData",
  async ({ code, query }) => {
    //! apiye gönderilecek parametreleri hazırla
    const params = { iso: code, q: query };

    //* IsoCode'a göre covid verileri al
    const req1 = axios.get(covidURL, { params, headers });
    //* IsoCode'a göre ülke verileri al
    const req2 = axios.get(
      code
        ? `https://restcountries.com/v3.1/alpha/${code}`
        : `https://restcountries.com/v3.1/name/${query}`
    );
    //* Her iki API'de de isteği aynı anda paralel olarak atıyoruz
    const response = await Promise.all([req1, req2]);
    //* Region neslesindeki değerleri bir üst nesne ile aynı düzeye çıkardık
    const covid = {
      ...response[0].data.data[0],
      ...response[0].data.data[0].region,
    };
    //*Gereksiz değerleri kaldırdık
    delete covid.region;
    delete covid.cities;
    delete covid.name;

    if (covid.province === "") delete covid.province;

    const country = response[1].data[0];

    return { covid, country };
  }
);
export default getData;
