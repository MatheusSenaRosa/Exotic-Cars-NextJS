import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

import {
  Form,
  InputAddress,
  InputDate,
  SectionInputs,
  IconInput,
  IconSearch,
} from "./styles";

export function FormHeader() {
  const [date, setDate] = useState<string>(dateFormatter(new Date()));

  function dateFormatter(date: Date) {
    const formatedDate = date
      .toLocaleDateString()
      .split("/")
      .reverse()
      .join("-");
    return formatedDate;
  }

  return (
    <Form>
      <SectionInputs>
        <IconInput>
          <MdLocationOn color="#C4C4C4" />
        </IconInput>
        <InputAddress placeholder="Address" />

        <IconInput>
          <IoCalendarSharp color="#C4C4C4" />
        </IconInput>
        <InputDate
          type="date"
          onChange={(e: any) => setDate(e.target.value)}
          value={date}
        />

        <IconInput margin={24}>
          <IoCalendarSharp color="#C4C4C4" />
        </IconInput>
        <InputDate type="date" />
      </SectionInputs>

      <IconSearch>
        <BiSearch />
      </IconSearch>
    </Form>
  );
}
