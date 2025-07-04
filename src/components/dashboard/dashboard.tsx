'use client';
import React, {useEffect, useState} from 'react';
import {AddActivityForm} from "@/components/form";
import {Container} from "@/components/ui";
import TotalCarbonFootprintChart from "@/components/chart/totalCarbonFootprintChart";
import FootprintOverTimeChart from "@/components/chart/footprintOverTimeChart";
import {ChartData} from "chart.js";
import Button from "@/components/ui/button";

const Dashboard = () => {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isFormOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isFormOpen]);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    const lineData: ChartData<'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Footprint Over Time',
                data: [60, 80, 75, 90, 110, 100],
                fill: false,
                borderColor: 'rgba(132,204,22,0.7)',
                backgroundColor: 'rgba(132,204,22,0.2)',
                tension: 0.4,
            },
        ],
    };

    const pieData: ChartData<'doughnut'> = {
        labels: ['Transport', 'Energy', 'Shopping', 'Waste'],
        datasets: [
            {
                data: [120, 90, 70, 55],
                backgroundColor: [
                    'rgba(132,204,22,0.2)',
                    'rgba(251,191,36,0.2)',
                    'rgba(248,113,113,0.2)',
                    'rgba(96,165,250,0.2)'
                ],
                borderColor: [
                    'rgba(132,204,22,0.7)',
                    'rgba(251,191,36,0.7)',
                    'rgba(248,113,113,0.7)',
                    'rgba(96,165,250,0.7)'
                ]
            }
        ],
    };

    return (
        <>
            {isFormOpen && (
                <AddActivityForm onClose={closeForm} />
            )}

            <Container className="sm:p-5" maxWidth={1400}>


                <div className="sm:rounded-2xl px-5 sm:py-7 flex flex-col items-start sm:border-1 ">

                    <div className="flex justify-between w-full items-center">
                        <div className="">
                            <h1 className="text-2xl">Total Carbon Footprint (June 2025) </h1>
                            <div className="flex items-baseline gap-2 py-2">
                                <span className="text-4xl font-bold text-lime-950 ">335kg CO₂e</span>
                                <span className="text-orange-200">+12% vs last month</span>
                            </div>
                        </div>
                        <div className="">
                            <Button variant="box"
                                    size="icon"
                                    active={true}
                                    onClick={openForm}
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-300 my-4"/>

                    <div className="w-full h-64 md:h-96 mx-auto my-5">
                        <TotalCarbonFootprintChart data={pieData} />
                    </div>

                    <div className="flex max-md:flex-col gap-3 w-full">
                        {[
                            {title: "Transport", value: 120, change: "↑ 8%"},
                            {title: "Energy", value: 90, change: "↑ 5%"},
                            {title: "Shopping", value: 70, change: "↓ 2%"},
                            {title: "Waste", value: 55, change: "↑ 1%"}
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex-1 rounded-2xl px-5 py-7 flex flex-col items-start border-1 min-w-0"
                            >
                                <h1 className="text-2xl">{item.title}</h1>
                                <h3 className="text-4xl mb-2 ">{item.value}</h3>
                                <h5 className="text-orange-200">{item.change}</h5>
                            </div>
                        ))}
                    </div>

                    <h1 className="text-2xl font-bold my-5">Footprint Over Time</h1>

                    <div className="h-64 w-full mx-auto my-5 py-5 px-7">
                        <FootprintOverTimeChart data={lineData} />
                    </div>

                    <h1 className="text-2xl font-bold my-5">Recent Activities</h1>


                    <div className="flex flex-col w-full">
                        {[
                            {activity: "Drove to work", amount: "+6kg"},
                            {activity: "Took public transport", amount: "+2kg"},
                            {activity: "Ate vegetarian meal", amount: "+1kg"},
                            {activity: "Recycled waste", amount: "-0.5kg"},
                            {activity: "Used LED lights", amount: "-0.2kg"},
                        ].map((item, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between w-full text-xl">
                                    <div>{item.activity}</div>
                                    <div>{item.amount}</div>
                                </div>
                                {idx < 4 && <div className="w-full h-px bg-gray-300 my-4"/>}
                            </div>
                        ))}
                    </div>

                    <div className="flex max-md:flex-col mt-16 gap-5 w-full">
                        <div className="flex-1 rounded-2xl px-5 py-7 flex flex-col items-start border-1 min-w-0">
                            <div className="text-2xl font-bold">Goal Progress</div>
                            <div className="mt-1 font-light">Reduce monthly footprint by 10% - On Track</div>
                            <progress className="w-full h-4 mt-4 rounded-full overflow-hidden" value={75}
                                      max={100}></progress>
                        </div>
                        <div className="flex-1 rounded-2xl px-5 py-7 flex flex-col items-start border-1 min-w-0">
                            <div className="text-2xl font-bold">Tip</div>
                            <div className="mt-1 font-light">
                                Try public transport twice a week to save up to 20 kg CO₂e monthly.
                            </div>
                        </div>
                    </div>

                </div>


            </Container>
        </>
    );
};

export default Dashboard;