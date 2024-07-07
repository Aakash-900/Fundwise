import React from 'react';
import './CampaignFilter.css';

const CampaignFilter = ({ onFilterChange, onSearch }) => {
  return (
    <div className="campaign-filter">
      <input
        type="text"
        placeholder="Type some words related to the campaign"
        onChange={(e) => onFilterChange('search', e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => onFilterChange('address', e.target.value)}
      />
      <select onChange={(e) => onFilterChange('topics', e.target.value)}>
        <option value="">Topics</option>
        <option value="topic1">Topic 1</option>
        <option value="topic2">Topic 2</option>
      </select>
      <select onChange={(e) => onFilterChange('category', e.target.value)}>
        <option value="">Category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default CampaignFilter;
