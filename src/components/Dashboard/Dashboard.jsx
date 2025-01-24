import React from 'react';
import StatsCard from './StatsCard';
import WordCloudSection from './WordCloudSection';

const Dashboard = () => {
  return (
    <div>
      <h1>SmartScraper Dashboard</h1>
      <StatsCard title="Tiempo medio a reservados" value="2.5 días" />
      <WordCloudSection />
    </div>
  );
};

export default Dashboard;
