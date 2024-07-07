import React from 'react';
import './PartnersSection.css';

import microsoftLogo from '../../../assets/Microsoft.png';
import saveTheChildrenLogo from '../../../assets/SaveChildern.png';
import conservationInternationalLogo from '../../../assets/Conservation.png';
import unicefLogo from '../../../assets/unicef.png';
import riverIslandLogo from '../../../assets/RiverIsland.png';
import helloWalletLogo from '../../../assets/HelloWalet.png';
import americanRedCrossLogo from '../../../assets/RedCross.png';
import palangMerahIndonesiaLogo from '../../../assets/Palang.png';

const partners = [
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Save the Children', logo: saveTheChildrenLogo },
  { name: 'Conservation International', logo: conservationInternationalLogo },
  { name: 'UNICEF', logo: unicefLogo },
  { name: 'River Island', logo: riverIslandLogo },
  { name: 'HelloWallet', logo: helloWalletLogo },
  { name: 'American Red Cross', logo: americanRedCrossLogo },
  { name: 'Palang Merah Indonesia', logo: palangMerahIndonesiaLogo },
];

const PartnersSection = () => {
  return (
    <div className="partners-section">
        <p className='ourpartner'>OUR PARTNER</p>
      <h1>More than 50 <span>Companies</span> and <span>Institutions</span> that trust us over the years</h1>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <img key={index} src={partner.logo} alt={partner.name} />
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
