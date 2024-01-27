import CompanyCardContainer from "@/components/CompanyCardContainer";
import companyData from "@/lib/companyData";

export default function Home() {
  return (
    <main className="flex flex-col p-2">
      <CompanyCardContainer companyData={companyData} />
    </main>
  );
}
