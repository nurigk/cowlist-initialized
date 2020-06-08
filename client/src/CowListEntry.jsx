import React from "react";

var CowListEntry = ({cow}) => {
    return (
<tr>
      <td>{cow.cowName}</td>
</tr>
    );
};
export default CowListEntry;
