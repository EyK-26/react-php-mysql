import { useState } from "react";
import { endpoint } from "../lib/apiEndpoint";

/* eslint-disable react/prop-types */
export const Controls = ({ onChangeOrder, onChangeSort }) => {
  const [order, setOrder] = useState("");
  const [sort, setSort] = useState("");

  const handleGetOrder = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
    const newUrl = `${endpoint}?orderby=${newOrder}&sortby=${sort}`;
    onChangeOrder(newUrl);
  };

  const handleGetSort = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    const newUrl = `${endpoint}?orderby=${order}&sortby=${newSort}`;
    onChangeSort(newUrl);
  };

  return (
    <div>
      <label htmlFor="order">Order By </label>
      <select name="order" id="order" onChange={handleGetOrder}>
        <option value="name">Name</option>
        <option value="wealth">Wealth</option>
      </select>
      <br />
      <label htmlFor="sort">Sort </label>
      <select name="sort" id="sort" onChange={handleGetSort}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};
