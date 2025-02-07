import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AssetProcurement = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Procurement & Financial Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="purchaseDate">Purchase Date</Label>
          <Input type="date" id="purchaseDate" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="purchaseCost">Purchase Cost</Label>
          <Input type="number" id="purchaseCost" placeholder="Enter cost" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vendorName">Vendor Name</Label>
          <Input id="vendorName" placeholder="Enter vendor name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="warrantyExpiry">Warranty Expiry Date</Label>
          <Input type="date" id="warrantyExpiry" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="depreciationValue">Depreciation Value</Label>
          <Input type="number" id="depreciationValue" placeholder="Enter depreciation value" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budgetCode">Budget Code / Cost Center</Label>
          <Input id="budgetCode" placeholder="Enter budget code" />
        </div>
      </div>
    </div>
  );
};

export default AssetProcurement;