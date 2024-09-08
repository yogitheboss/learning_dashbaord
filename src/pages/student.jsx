import Navbar from "@/components/navbar";
import InteractionFlow from "@/components/reactFlow";
import SearchInputWithSuggestions from "@/components/searchBox";
import React, { useEffect } from "react";

const Student = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Navbar type={"Student"}/>
      <SearchInputWithSuggestions 
        items={[
            "samosa","gupchup"
        ]}
      />
      <InteractionFlow />
    </div>
  );
};

export default Student;
