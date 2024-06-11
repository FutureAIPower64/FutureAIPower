"use client";
import React, { useState, useEffect, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseSharp, IoDocumentTextOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { searchData, changeToggle } from "../../store/counter/counterSlice";

function Box() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.counter.toggle);
  const cards = useSelector((state) => state.counter.alldata);

  const [input, setInput] = useState("");

  const uniqueListing = useMemo(() => {
    return Array.from(
      new Set([
        ...cards.flatMap((card) => card.tags),
        ...cards.map((card) => card.title),
      ])
    );
  }, [cards]);

  const filteredListing = useMemo(() => {
    return uniqueListing.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
  }, [uniqueListing, input]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        dispatch(changeToggle("visible"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  const close = () => {
    if (toggle === "visible") {
      dispatch(changeToggle("hidden"));
    }
  };

  const handleSearchData = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const searchCard = (item) => {
    dispatch(searchData(item));
    dispatch(changeToggle("hidden"));
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.8)",
        visibility: toggle,
      }}
      className="flex justify-center items-center fixed top-0 left-0 w-full z-50"
    >
      <div className="box p-2 h-box rounded-md sm-w-full bg-white dark:bg-dark-black dark:text-white md:w-2/5 mx-auto overflow-hidden text-md border-1 border-dark-grey">
        <div className="flex justify-between items-center pt-1 pb-2 border-b-1 border-dark-grey">
          <i className="text-xl px-2">
            <CiSearch />
          </i>
          <input
            type="text"
            value={input}
            onChange={handleSearchData}
            placeholder="Type a command or search..."
            className="w-4/5 rounded-md p-1 bg-dark-black"
            style={{ outline: "none" }}
          />
          <i className="text-xl px-2 cursor-pointer" onClick={close}>
            <IoCloseSharp />
          </i>
        </div>
        <div className="overflow-hidden overflow-y-scroll h-full">
          <ul className="px-2 pt-2">
            {filteredListing.map((item, index) => (
              <li
                key={index}
                className="flex items-center py-2 px-2 cursor-default hover:bg-dark-grey rounded-sm"
                onClick={() => searchCard(item)}
              >
                <i>
                  <IoDocumentTextOutline />
                </i>
                <span className="ps-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Box;