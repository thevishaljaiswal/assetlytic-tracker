
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <h1 className="text-2xl font-bold text-primary">IT Asset Management</h1>
      <div className="flex w-full md:w-auto gap-2 items-center">
        <div className="relative flex-1 md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search assets..."
            className="pl-8"
          />
        </div>
        <Button 
          variant="outline"
          onClick={() => navigate('/report')}
        >
          <FileText className="mr-2 h-4 w-4" />
          Report
        </Button>
        <Button className="whitespace-nowrap">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Asset
        </Button>
      </div>
    </div>
  );
};

export default Header;
