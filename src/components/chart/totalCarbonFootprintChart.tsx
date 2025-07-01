'use client';
import React from 'react';
import {ArcElement, Chart as ChartJS, ChartData, ChartOptions, Legend, Tooltip} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);

const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                font: {
                    size: 16,
                }
            }
        },
        datalabels: {
            color: '#000',
            font: {
                size: 16,
            },
            formatter: (value: number, context: any) => {
                const data = context.chart.data.datasets[0].data as number[];
                const total = data.reduce((a, b) => a + b, 0);
                const percentage = total ? (value / total) * 100 : 0;
                return `${percentage.toFixed(1)}%`;
            }
        }
    }
};

interface TotalCarbonFootprintChartProps {
    data: ChartData<'doughnut'>
}

const TotalCarbonFootprintChart = ({ data }: TotalCarbonFootprintChartProps) => {
    return <Doughnut
        data={data}
        options={options}
    />;
};

export default TotalCarbonFootprintChart;