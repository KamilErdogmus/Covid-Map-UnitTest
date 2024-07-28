import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import getData from "./../../redux/actions";
import Loader from "./../../components/Loader/Loader";
import Error from "./../../components/Error/Error";
import Infocard from "./Infocard";

const Detail = () => {
  const { isLoading, isError, data } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const code = params.get("code");
  const query = params.get("q");

  useEffect(() => {
    //*verileri alıp store'a aktaran aksiyonu tetikle
    dispatch(getData({ code, query }));
  }, [code, query]);

  const covidArr = Object.entries(data?.covid || {});

  return (
    <div className="text-white p-6 grid place-items-center min-h-[calc(100vh-80px)]">
      <div className="min-h-[80vh] bg-white p-8 rounded-lg md:w-full max-w-4xl shadow-lg">
        <div className="flex justify-between items-center">
          <Link to="/">
            <button id="back" className="text-black">
              <svg
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
              >
                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
              </svg>
              <span>Back</span>
            </button>
          </Link>
          <div className="flex items-center space-x-2">
            {isLoading ? (
              <Loader type="header" />
            ) : (
              data && (
                <>
                  <h1 className="text-zinc-900 text-lg lg:text-2xl font-bold  uppercase">
                    {data.country.name.common}
                  </h1>
                  <img
                    className="rounded-md w-16 lg:w-24"
                    src={data.country.flags.png}
                    alt={data.country.flags.alt}
                  />
                </>
              )
            )}
          </div>
        </div>

        {/* İçerik */}
        <div className="grid grid-cols-1 sm:gridcol-2 md:grid-cols-3 mt-6 gap-6">
          {isError ? (
            <Error
              info={isError}
              retry={() => dispatch(getData({ code, query }))}
            />
          ) : (
            covidArr.map((covid, i) => (
              <Infocard
                data-testid="card-loader"
                key={i}
                covid={covid}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
