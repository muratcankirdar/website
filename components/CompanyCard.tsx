import { FC } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Skills from "./Skills";
import CompanySummary from "./CompanySummary";

interface CompanyCardProps {
  logo: string;
  companyName: string;
  duration: string;
  companySummaryItems: string[];
  skills: string[];
}

const CompanyCard: FC<CompanyCardProps> = ({
  logo,
  companyName,
  companySummaryItems,
  duration,
  skills,
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between gap-3">
        <div className="flex flex-row items-center gap-3">
          <Image
            className="rounded-full border"
            src={logo}
            alt={`${companyName} Logo`}
            width={32}
            height={24}
          />

          <CardDescription className="font-semibold">
            {companyName}
          </CardDescription>
        </div>

        <Badge>{duration}</Badge>
      </CardHeader>

      <CardContent>
        <CompanySummary items={companySummaryItems} />
      </CardContent>

      <CardFooter>
        <Skills skills={skills} />
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
