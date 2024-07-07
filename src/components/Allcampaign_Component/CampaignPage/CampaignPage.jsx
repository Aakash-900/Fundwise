import React, { useState, useEffect } from 'react';
import CampaignFilter from '../ShowCompaign/CampaignFilter';
import CampaignCard from '../CampaignCard/CampaignCard';
import CampaignPagination from '../CampaignPagination/CampaignPagination';
import { fetchCampaigns } from '../../../api/campaigns'; // Import the API function
import './CampaignPage.css';

const CampaignPage = () => {
  const [filters, setFilters] = useState({});
  const [campaigns, setCampaigns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const campaignsPerPage = 12;

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const data = await fetchCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };
    loadCampaigns();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleSearch = () => {
    // Perform search based on filters
    console.log('Search with filters:', filters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = campaigns.length ? Math.ceil(campaigns.length / campaignsPerPage) : 1;
  

  return (
    <div className="campaign-page">
      <CampaignFilter onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <div className="campaign-cards">
        {Array.isArray(campaigns) && campaigns.length > 0 ? (
          campaigns.slice((currentPage - 1) * campaignsPerPage, currentPage * campaignsPerPage).map((campaign) => (
            <CampaignCard key={campaign._id} {...campaign} />
          ))
        ) : (
          <p>No campaigns available.</p>
        )}
      </div>
      <CampaignPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CampaignPage;
