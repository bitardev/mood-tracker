import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export const metadata = {
  title: "MoodTracker • Dashboard",
  description: "Track your daily mood every day of the year!",
};
export default function DashboardPage() {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
}
