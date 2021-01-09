import React from "react";
import CommenstList from "../comments-list";
import FansForm from "../fans-form";

const Fans:React.FC = () => {
  return (
    <>
      <h2 className="appeal-header">
        Appeal of fans
      </h2>
      <FansForm />
      <CommenstList />
    </>
  );
};

export default Fans;
