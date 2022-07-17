import React, { useEffect, useMemo, useState } from 'react';
import { FeaturedInfo, WidgetLarge, WidgetSmall, Chart} from '../../components'
import './dashboard.scss'
import { getUsersAPI } from '../../redux/api/api';


const Dashboard = () => {
    // months 
    const MONTHS = useMemo(() => ["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov", "Dec"], []);

    const [userStats, setUserStats] = useState([]);

    const getStats = async () => {
        try {
            const res = await getUsersAPI("/stats"); 

            // sort months
            const statsList = res.data.sort(function (a, b) {
                return a._id - b._id;
            });

            statsList.map((item) =>
                setUserStats((prevData) => [
                    ...prevData,
                    { name: MONTHS[item._id - 1], "New User": item.total },
                ])
            );

        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getStats();
    }, [MONTHS]);

    return (
        <div className='dahboard'>
            <FeaturedInfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    );
};

export default Dashboard;