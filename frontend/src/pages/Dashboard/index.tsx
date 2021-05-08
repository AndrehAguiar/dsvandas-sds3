import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Dashboard from "components/Dashboard";

const PageDashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Dashboard />
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default PageDashboard;