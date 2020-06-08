import React from "react";
import CowListEntry from "./CowListEntry"

var CowList = ({cows}) => {
    return (
      <tbody>
       {cows.map(cow => {
         return
         <tr><CowListEntry cow={cow} key={cow.cowId}/></tr>
       })}
       <p>hi</p>
       </tbody>
    );
} ;
export default CowList;
