import AssetCard from "./AssetCard";

const mockAssets = [
  {
    id: "AST001",
    name: "Dell XPS 15",
    type: "Laptop",
    status: "Active",
    assignedTo: "John Doe",
    location: "HQ - Floor 2",
  },
  {
    id: "AST002",
    name: "HP ProDesk 600",
    type: "Desktop",
    status: "Maintenance",
    assignedTo: "Jane Smith",
    location: "Branch Office",
  },
  {
    id: "AST003",
    name: "Cisco Switch",
    type: "Network",
    status: "Active",
    assignedTo: "IT Department",
    location: "Server Room",
  },
  {
    id: "AST004",
    name: "Adobe Creative Suite",
    type: "Software",
    status: "Active",
    assignedTo: "Design Team",
    location: "Design Department",
  },
];

const AssetGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockAssets.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
};

export default AssetGrid;