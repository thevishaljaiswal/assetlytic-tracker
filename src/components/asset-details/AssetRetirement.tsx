import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AssetRetirement = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Asset Retirement & Disposal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="decommissionDate">Decommission Date</Label>
          <Input type="date" id="decommissionDate" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="disposalReason">Reason for Disposal</Label>
          <Input id="disposalReason" placeholder="e.g., End-of-life, damaged" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="disposalMethod">Disposal Method</Label>
          <Input id="disposalMethod" placeholder="e.g., Recycled, Resold" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="resaleValue">Resale Value</Label>
          <Input type="number" id="resaleValue" placeholder="Enter resale value" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="disposalCompliance">Disposal Compliance</Label>
          <Textarea id="disposalCompliance" placeholder="Enter disposal compliance details" />
        </div>
      </div>
    </div>
  );
};

export default AssetRetirement;