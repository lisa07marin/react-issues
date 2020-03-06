import React from "react";
import IssueFilter from "./IssueFilter";
import IssueList from "./IssueList";
import {sampleData} from "./sampleData"
function Issue () {
    return (
      <div>
        <IssueFilter />
        <IssueList data={sampleData}/>
      </div>
    );
  
}
export default Issue;
