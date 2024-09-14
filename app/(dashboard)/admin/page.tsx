import { DashboardCardWrapper } from "@/components/admin/CardWrapper";
import RevenueChart from "@/components/admin/RevenueChart";
import SalesPanel from "@/components/admin/SalesPanel";
const AdminPage = () => {
    return (
        <div className=" flex gap-4 flex-col  m-auto justify-center">
            <div className="w-full gap-4 h-fit grid grid-cols-4">
            <DashboardCardWrapper />
            <DashboardCardWrapper />
            <DashboardCardWrapper />
            <DashboardCardWrapper />
            </div>
            <div className="h-[80vh] w-full flex">
            <RevenueChart />
            <SalesPanel />
            </div>
        </div>
    );
};

export default AdminPage;