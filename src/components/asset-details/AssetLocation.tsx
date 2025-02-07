import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AssetLocation = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Asset Location & Assignment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="assetLocation">Asset Location</Label>
          <Input id="assetLocation" placeholder="e.g., Office, Data Center" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Input id="department" placeholder="e.g., IT, Finance" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="assignedUser">Assigned User</Label>
          <Input id="assignedUser" placeholder="Enter user name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="employeeId">Employee ID</Label>
          <Input id="employeeId" placeholder="Enter employee ID" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="assignmentDate">Assignment Date</Label>
          <Input type="date" id="assignmentDate" />
        </div>
      </div>
    </div>
  );
};

export default AssetLocation;