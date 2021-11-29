import React from "react";

import {TabType} from "types/types";

type TabsHeaderPropsType = {
  tabs: TabType[];
};

export const TabsHeader: React.FC<TabsHeaderPropsType> = (props) => {
  const {tabs} = props;

  return <div>
    {
      tabs.map(({}, index) => (

      ))
    }
  </div>;
};
