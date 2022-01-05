import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import { api } from '../../services/api';

const Dashboard: NextPage = () => {
    return (
        <>
            <Sidebar />
        </>
    )
}

export default Dashboard