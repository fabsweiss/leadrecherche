// src/pages/DashboardPage.tsx

import React from 'react';
import Card from '../components/Card';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Total Sales" content="$10,000" />
        <Card title="Active Users" content="150" />
        <Card title="New Signups" content="30" />
      </div>
    </div>
  );
};

export default DashboardPage;
