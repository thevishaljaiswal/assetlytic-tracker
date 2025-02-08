
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AssetReport = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Asset Report</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500">Asset report content will be implemented here.</p>
      </div>
    </div>
  );
};

export default AssetReport;
