import {FeatureSection} from "@/components/landing";
import {Container} from "@/components/ui";

const howItWorksSteps = [
    {
        step: 1,
        title: "Your Travel Habits",
        subtitle: "Track Your Transportation Footprint.",
        description: "Start by telling us about your travel routines. Input your average weekly driving mileage and your total flight hours for the year. This helps us calculate the carbon emissions from your daily commute and long-distance travel."
    },
    {
        step: 2,
        title: "Your Home Energy",
        subtitle: "Measure Your Energy Consumption.",
        description: "Next, enter your average monthly electricity usage. Your home is a significant part of your footprint, and understanding your energy consumption is a key step toward reducing it."
    },
    {
        step: 3,
        title: "Your Dietary Choices",
        subtitle: "Analyze the Impact of Your Diet.",
        description: "What you eat matters. Select the dietary profile that best describes your habits—from vegan to meat-lover—to see how your food choices contribute to your overall carbon footprint."
    }
];

export default function Home() {
    return (
        <>
            <header className="flex flex-col justify-end h-[500px] bg-lime-950 text-amber-50 rounded-b-2xl">

                <Container>
                    <div className="flex flex-col justify-between max-h-lg pb-24">
                        <h1 className="text-4xl font-bold py-3">
                            Understand
                            <span className="block h-2"/>
                            Your Environmental Impact
                        </h1>

                        <p className="text-xl max-w-2xl">
                            Our easy-to-use calculator helps you measure your daily carbon emissions from
                            transportation,
                            energy, and diet. Discover simple ways to reduce your environmental impact and track your
                            progress over time.
                        </p>
                    </div>
                </Container>

            </header>


            <section id="howItWorks" className="py-20">
                <Container className="p-5">
                    <h1 className="text-5xl">
                        How It Works: A Simple 3-Step Process
                    </h1>

                    <p className="text-xl mt-2 max-w-4xl">
                        Calculating your carbon footprint has never been easier. Just provide a few details about your
                        lifestyle, and we'll handle the rest.
                    </p>

                    <div className="flex flex-col gap-10 mt-10">
                        {howItWorksSteps.map((step) => (
                            <FeatureSection key={step.step} {...step} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
