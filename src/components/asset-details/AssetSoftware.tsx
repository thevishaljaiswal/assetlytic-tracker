import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AssetSoftware = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Software & License Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="softwareName">Software Name</Label>
          <Input id="softwareName" placeholder="Enter software name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="licenseType">License Type</Label>
          <Input id="licenseType" placeholder="e.g., Perpetual, Subscription" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="licenseKey">License Key</Label>
          <Input id="licenseKey" placeholder="Enter license key" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input type="date" id="expiryDate" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="usersAllowed">Number of Users Allowed</Label>
          <Input type="number" id="usersAllowed" placeholder="Enter number of users" />
        </div>
      </div>
    </div>
  );
};

export default AssetSoftware;