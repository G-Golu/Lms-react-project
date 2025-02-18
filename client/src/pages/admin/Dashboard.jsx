import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Dashboard;
