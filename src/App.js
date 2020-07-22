
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "./api/fetchApi";


function App() {

  const { test } = useSelector(state => state.testComment);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi(dispatch)
  }, [dispatch]);
  return (
    < div className="xx" >
      {console.log(test)}
      <p>Hello</p>
    </ div >
  );
}

export default App;
