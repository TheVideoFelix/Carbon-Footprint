'use client';
import React from 'react';
import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    ChartData, ChartOptions, Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

interface footprintOverTimeChartProps {
    data: ChartData<'line'>
}

const FootprintOverTimeChart = ({ data } : footprintOverTimeChartProps) => {
    return <Line
        data={data}
        options={options}
    />;
}

export default FootprintOverTimeChart;