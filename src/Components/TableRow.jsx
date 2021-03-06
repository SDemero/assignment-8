import React from "react";
import TableColumn from "./TableColumn";

const TableRow = (props) => {
  let tableCells = [];

  for (let i = 0; i < props.numColumns; i++) {
    tableCells.push(
      <TableColumn
        mouseDown={props.mouseDown}
        mouseUp={props.mouseUp}
        mouseEnter={props.mouseEnter}
        selectedColor={props.selectedColor}
        changeToColor={props.changeToColor}
      />
    );
  }

  return <tr>{tableCells}</tr>;
};

export default TableRow;