import HomeDashboard from "../components/dashboards/HomeDashboard";
import PerfilDashboard from "../components/dashboards/PerfilDashboard";
import RankingDashboard from "../components/dashboards/RankingDashboard";

export const children = [
  {
    name: "dashboard",
    element: <HomeDashboard />,
    string: "Dashboard",
  },
  {
    name: "perfil",
    element: <PerfilDashboard />,
    string: "Perfil",
  },
  {
    name: "ranking",
    element: <RankingDashboard />,
    string: "Ranking",
  },
];
