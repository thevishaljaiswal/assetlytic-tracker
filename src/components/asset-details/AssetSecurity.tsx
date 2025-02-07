import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AssetSecurity = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Security & Compliance Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="assetTag">Asset Tag (Barcode/RFID)</Label>
          <Input id="assetTag" placeholder="Enter asset tag" />
        </div>
        <div className="space-y-2">
          <Label>Encryption Status</Label>
          <RadioGroup defaultValue="no">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="encryption-yes" />
              <Label htmlFor="encryption-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="encryption-no" />
              <Label htmlFor="encryption-no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="complianceStatus">Compliance Status</Label>
          <Input id="complianceStatus" placeholder="e.g., ISO, GDPR" />
        </div>
        <div className="space-y-2">
          <Label>Antivirus Installed</Label>
          <RadioGroup defaultValue="no">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="antivirus-yes" />
              <Label htmlFor="antivirus-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="antivirus-no" />
              <Label htmlFor="antivirus-no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastAuditDate">Last Security Audit Date</Label>
          <Input type="date" id="lastAuditDate" />
        </div>
      </div>
    </div>
  );
};

export default AssetSecurity;