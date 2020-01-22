import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../Input/Input.js";

export const DatePickerComponent = ({ dateFormat, isDisabled }) => {
  const [startDate, setStartDate] = useState(new Date());
  // const [open, setOpen] = useState(true);

  const DatePickerInput = ({ value, onClick }) => {
    return (
      <Input
        type="date"
        value={value}
        onClick={onClick}
        required="required"
        readOnly
        isDisabled={isDisabled ? true : false}
      ></Input>
    );
  };

  const onChangeFunc = date => {
    setStartDate(date);
  };
  return (
    <>
      <ReactDatePicker
        selected={startDate}
        dateFormat={dateFormat ? dateFormat : "dd/MM/yyyy"}
        onChange={date => onChangeFunc(date)}
        customInput={<DatePickerInput></DatePickerInput>}
      />
    </>
  );
};
