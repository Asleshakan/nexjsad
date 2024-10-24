//src/app/dashboard/page.tsx

"use client";  
import React from 'react';
import { useSession } from 'next-auth/react';
import Header from '../components/Header';

const DashboardPage = () => {
  const {} = useSession();
  return (
    <div>
      <Header />
      <p>Hi Aslesha</p>
    </div>
  );
};
export default DashboardPage;
