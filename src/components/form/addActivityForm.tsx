'use client';
import React, {useState} from 'react';
import Button from "@/components/ui/button";
import {EnergyForm, ShoppingForm, TransportForm, WasteForm} from "@/components/form/activity-forms";

type TabConfig = {
    label: string;
    component: React.ComponentType;
};

const TABS: Record<string, TabConfig> = {
    transport: { label: "Transport" , component: TransportForm },
    energy:{ label: "Energy" , component: EnergyForm },
    shopping:{ label: "Shopping" , component: ShoppingForm },
    waste:{ label: "Waste" , component: WasteForm }
};

type TabKey = keyof typeof TABS;

interface AddActivityFormProps {
    onClose: () => void,
}

const AddActivityForm = ({ onClose }: AddActivityFormProps) => {
    const [activeForm, setActiveForm] = useState<TabKey>('transport');

    const ActiveFormComponent: React.ComponentType = TABS[activeForm].component;

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <div className="fixed inset-0 z-40 bg-gray-900/10 backdrop-blur-sm transition-all duration-300" />

            <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                onClick={onClose}
            >
                <div
                    className="bg-amber-50 p-8 rounded-lg shadow-sm w-full sm:w-[600px] xl:w-1/3 h-full sm:h-[800px] flex flex-col transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-full flex flex-col flex-1">
                        <h1 className="text-2xl font-bold">Add Activity</h1>
                        <div className="mt-5 px-7">
                            <div className="flex justify-between">
                                {(Object.keys(TABS) as TabKey[]).map((tapKey) => (
                                    <div key={tapKey} className="flex-1 text-center">
                                        <Button
                                            className="transition-all duration-200"
                                            variant="text"
                                            active={tapKey === activeForm}
                                            onClick={() => setActiveForm(tapKey)}
                                        >
                                            {TABS[tapKey].label}
                                        </Button>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-4"/>

                        <form action="" className="flex flex-col justify-between flex-1">
                            <div className="flex flex-col gap-10 mt-10">

                                <ActiveFormComponent />

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
                                <Button
                                    variant='box'
                                    size="full"
                                    onClick={onClose}
                                >
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