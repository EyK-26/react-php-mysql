/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from "react";
import { CelebrityList } from "./CelebrityList";
import { Controls } from "./Controls";
import { endpoint } from "../lib/apiEndpoint";

export const Fetch = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(endpoint);

  const fetchCelebrityList = useCallback(async () => {
    const data = await fetch(url);
    const response = await data.json();
    setList(response);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchCelebrityList();
  }, [fetchCelebrityList]);

  const handleChangeOrder = (updatedURL) => {
    console.log(url);
    setUrl(updatedURL);
  };

  const handleChangeSort = (updatedURL) => {
    console.log(url);
    setUrl(updatedURL);
  };

  return (
    <div>
      {loading ? (
        "LOADING..."
      ) : (
        <div>
          <Controls
            onChangeOrder={handleChangeOrder}
            onChangeSort={handleChangeSort}
          />
          <CelebrityList list={list} />
        </div>
      )}
    </div>
  );
};
