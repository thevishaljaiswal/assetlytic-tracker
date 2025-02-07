import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetGeneralInfo from "@/components/asset-details/AssetGeneralInfo";
import AssetProcurement from "@/components/asset-details/AssetProcurement";
import AssetLocation from "@/components/asset-details/AssetLocation";
import AssetSoftware from "@/components/asset-details/AssetSoftware";
import AssetPerformance from "@/components/asset-details/AssetPerformance";
import AssetSecurity from "@/components/asset-details/AssetSecurity";
import AssetRetirement from "@/components/asset-details/AssetRetirement";

const AssetDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Asset Details - {id}</h1>
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          <TabsTrigger value="general">General Info</TabsTrigger>
          <TabsTrigger value="procurement">Procurement</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="retirement">Retirement</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <AssetGeneralInfo />
        </TabsContent>
        <TabsContent value="procurement">
          <AssetProcurement />
        </TabsContent>
        <TabsContent value="location">
          <AssetLocation />
        </TabsContent>
        <TabsContent value="software">
          <AssetSoftware />
        </TabsContent>
        <TabsContent value="performance">
          <AssetPerformance />
        </TabsContent>
        <TabsContent value="security">
          <AssetSecurity />
        </TabsContent>
        <TabsContent value="retirement">
          <AssetRetirement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssetDetails;