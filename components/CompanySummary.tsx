import { FC } from "react";

interface CompanySummaryProps {
  items: string[];
}

const CompanySummary: FC<CompanySummaryProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default CompanySummary;
