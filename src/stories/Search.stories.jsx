import React from "react";

import Search from "../components/Search/search.component";

import { data } from "./search.data";

export default {
  component: Search,
  title: "Search",
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  setSearchData: function () {},
  searchData: data,
};
