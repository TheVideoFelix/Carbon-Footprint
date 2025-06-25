import {Navbar} from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <Navbar />
            <main className="relative z-10 bg-amber-50 rounded-2xl">
                {children}
            </main>
            <Footer />
        </div>
    );
}