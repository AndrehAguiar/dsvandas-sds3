import DonutChart from 'components/DonutChart';
import BarChart from '../BarChart';

const Dashboard = () => {
    return (
        <>
            <h1 className="text-primary py-3">Dashboard de Vendas</h1>
            <div className="row px-3">
                <BarChart />
                <DonutChart />
            </div>
        </>
    );
}
export default Dashboard;