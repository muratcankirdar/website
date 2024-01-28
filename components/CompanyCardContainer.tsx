import { FC } from 'react';
import CompanyCard from './CompanyCard';
import { CompanyData, Company } from '@/lib/companyData';

interface CompanyCardContainerProps {
  companyData: CompanyData;
}

const CompanyCardContainer: FC<CompanyCardContainerProps> = ({
  companyData,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {Object.values(companyData).map((companyItem: Company) => (
        <CompanyCard
          key={companyItem.name}
          logo={companyItem.logo}
          companyName={companyItem.name}
          companySummaryItems={companyItem.companySummaryItems}
          duration={companyItem.duration}
          skills={companyItem.skills}
        />
      ))}
    </div>
  );
};

export default CompanyCardContainer;
