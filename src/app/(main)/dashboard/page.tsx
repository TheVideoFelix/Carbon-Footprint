import {Container} from "@/components/ui";

export default function Dashboard() {
    return (
        <>
            <header className="flex flex-col justify-end h-[200px] bg-lime-950 text-amber-50 rounded-b-2xl">

                <Container>
                    <div className="flex flex-col max-h-lg pb-10">
                        <h1 className="text-4xl font-bold py-3">
                            Your Environmental
                            <span className="block h-2"/>
                            Impact
                        </h1>
                    </div>
                </Container>

            </header>


            <section className="py-20">
                <Container className="p-5">


                    <div className="rounded-2xl px-5 py-7 flex flex-col items-start border-1 ">

                        <div className="">
                            <h1 className="text-2xl">Total Carbon Footprint (June 2025) </h1>
                            <div className="flex items-baseline gap-2 py-2">
                                <span className="text-4xl font-bold text-lime-950 ">335kg CO₂e</span>
                                <span className="text-orange-200">+12% vs last month</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gray-300 my-4"/>

                        <div className="h-96 w-96 bg-amber-200 mx-auto my-5">Pie Chart</div>

                        <div className="flex gap-3 w-full">
                            {[
                                {title: "Transport", value: 120, change: "↑ 8%"},
                                {title: "Energy", value: 90, change: "↑ 5%"},
                                {title: "Food", value: 70, change: "↓ 2%"},
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

                        <div className="h-60 w-[500px] bg-lime-700 mx-auto my-5">Pie Chart</div>

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

                        <div className="flex mt-16 gap-5 w-full">
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
            </section>
        </>
    )
}