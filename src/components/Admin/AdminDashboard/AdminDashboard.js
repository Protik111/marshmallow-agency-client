import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminManagement from '../AdminManagement/AdminManagement';

const AdminDashboard = () => {
    document.title= 'Admin - Dashboard';
    return (
        <div>
            <AdminHeader></AdminHeader>
            <AdminManagement></AdminManagement>
        </div>
    );
};

export default AdminDashboard;