import { FC } from 'react';
import MainLayout from '@/Layout/MainLayout';
import BusinessTable from '@/Businesses/BusinessTable';

const Clients: FC = () => {
  return (
    <MainLayout>
      <BusinessTable />
    </MainLayout>
  );
};

export default Clients;
