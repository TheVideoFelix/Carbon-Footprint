import React from 'react';
import Button from "@/components/ui/button";

const AddActivityForm = () => {

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <div className="fixed inset-0 z-40 bg-gray-900/10 backdrop-blur-sm" />

            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-amber-50 p-8 rounded-lg shadow-sm w-1/3 h-[800px] flex flex-col">
                    <div className="w-full flex flex-col flex-1">
                        <h1 className="text-2xl font-bold">Add Activity</h1>
                        <div className="mt-5 px-7">
                            <ul className="flex justify-between">
                                {[
                                    { label: "Transport", active: true },
                                    { label: "Energy", active: false },
                                    { label: "Food", active: false },
                                    { label: "Waste", active: false }
                                ].map((item, index) => (
                                    <Button
                                        variant="text"
                                        key={index}
                                        active={item.active}
                                    >
                                        {item.label}
                                    </Button>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-4"/>

                        <form action="" className="flex flex-col justify-between flex-1">
                            <div className="flex flex-col gap-10 mt-10">
                                <div>
                                    <label htmlFor="transport-type" className="block text-lime-900 font-semibold mb-2">Type</label>
                                    <select
                                        id="transport-type"
                                        className="w-full p-3 rounded-lg border border-lime-900/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-900"
                                    >
                                        <option>Car (Gasoline)</option>
                                        <option>Bus</option>
                                        <option>Train</option>
                                        <option>Bicycle</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="distance" className="block text-lime-900 font-semibold mb-2">Distance (km)</label>
                                    <input
                                        type="number"
                                        id="distance"
                                        placeholder="e.g., 25"
                                        className="w-full p-3 rounded-lg border border-lime-900/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-lime-900 font-semibold mb-2">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        defaultValue={today}
                                        className="w-full p-3 rounded-lg border border-lime-900/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-900"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex gap-4 mt-8">
                                <Button variant='box' size="full">
                                    Cancel
                                </Button>
                                <Button variant='box' size="full" active={true}>
                                    Add
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddActivityForm;