import StatsCards from "../../components/dashboard/StatsCards";
import AnalyticsChart from "../../components/charts/AnalyticsChart";

function Dashboard() {
  return (
    <div className="p-6">
      <StatsCards />
      <AnalyticsChart />
    </div>
  );
}

export default Dashboard;