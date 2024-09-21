import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
  title: "MoodTracker • Dashboard",
  description: "Track your daily mood every day of the year!",
};
export default function DashboardPage() {
  const isAtuthenticated = true;
  let children = <Login />;
  if (isAtuthenticated) {
    children = <Dashboard />;
  }
  return <Main>{children}</Main>;
}
