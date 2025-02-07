import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AssetGeneralInfo = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">General Asset Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="assetId">Asset ID</Label>
          <Input id="assetId" placeholder="Enter asset ID" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="assetName">Asset Name</Label>
          <Input id="assetName" placeholder="e.g., Dell Laptop XPS 15" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="assetType">Asset Type</Label>
          <Input id="assetType" placeholder="e.g., Laptop" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="manufacturer">Manufacturer</Label>
          <Input id="manufacturer" placeholder="e.g., Dell" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="modelNumber">Model Number</Label>
          <Input id="modelNumber" placeholder="Enter model number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="serialNumber">Serial Number</Label>
          <Input id="serialNumber" placeholder="Enter serial number" />
        </div>
      </div>
    </div>
  );
};

export default AssetGeneralInfo;