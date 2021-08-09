import React from 'react';
import PropTypes from "prop-types";
import {useState} from "react";

const Tabs = ({children}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (evt, newActiveTab) => {
    evt.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <div className="tabs">
      <ul className="list tabs__list">
        {children.map((tab) => {
          return <li
            key={tab.props.label}
            className={`tabs__item ${tab.props.label === activeTab ? `tabs__item--current` : ``}`}
            onClick={(evt) => handleTabClick(evt, tab.props.label)}
          >{tab.props.label}
          </li>;
        })}
      </ul>
      <div className="tabs__content">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <React.Fragment key={child.props.label}>{child.props.children}</React.Fragment>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node
};

export default Tabs;
