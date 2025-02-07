import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AssetPerformance = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Asset Performance & Maintenance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Input id="status" placeholder="e.g., Active, In Use" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastMaintenance">Last Maintenance Date</Label>
          <Input type="date" id="lastMaintenance" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nextMaintenance">Next Maintenance Due</Label>
          <Input type="date" id="nextMaintenance" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mtbf">MTBF (Mean Time Between Failures)</Label>
          <Input id="mtbf" placeholder="Enter MTBF" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mttr">MTTR (Mean Time to Repair)</Label>
          <Input id="mttr" placeholder="Enter MTTR" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="ticketHistory">Support Ticket History</Label>
          <Textarea id="ticketHistory" placeholder="Enter ticket history" />
        </div>
      </div>
    </div>
  );
};

export default AssetPerformance;