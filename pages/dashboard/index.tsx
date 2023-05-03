//import { DashboardTable } from '@/components/dashboard/dashboardtable';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

export const Dashboard = ({}) => {
  return (
    <>
      <h1 className="bg-yellow-300 h-20">Restricted area</h1>
    </>
  );
};

export default Dashboard;
export const getServerSideProps = withPageAuthRequired();
