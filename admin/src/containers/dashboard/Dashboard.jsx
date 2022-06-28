import React from 'react';
import './dashboard.scss'

import { FeaturedInfo, WidgetLarge, WidgetSmall, Chart} from '../../components'
import { useEffect, useMemo, useState } from "react";
import axios from "axios";


const Dashboard = () => {
    // months 
    const MONTHS = useMemo(() => ["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov", "Dec"], []);

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats", {
                    headers: {
                        token:
                        "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });

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