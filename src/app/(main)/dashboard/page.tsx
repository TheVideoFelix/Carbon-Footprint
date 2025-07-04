import {Container} from "@/components/ui";
import {Dashboard} from "@/components/dashboard";

export default function DashboardPage() {
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
                <Dashboard />
            </section>
        </>
    )
}