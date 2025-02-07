import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface AssetCardProps {
  asset: {
    id: string;
    name: string;
    type: string;
    status: string;
    assignedTo: string;
    location: string;
  };
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-500";
    case "maintenance":
      return "bg-yellow-500";
    case "retired":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const AssetCard = ({ asset }: AssetCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={() => navigate(`/asset/${asset.id}`)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{asset.name}</CardTitle>
        <Badge className={`${getStatusColor(asset.status)} text-white`}>
          {asset.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Asset ID:</span>
            <span className="text-sm font-medium">{asset.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Type:</span>
            <span className="text-sm font-medium">{asset.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Assigned To:</span>
            <span className="text-sm font-medium">{asset.assignedTo}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Location:</span>
            <span className="text-sm font-medium">{asset.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetCard;