import { Navbar } from "../components/Navbar";

interface PageLayoutProps {
    children: React.ReactNode;
    pt?: string;
}

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="cyber-grid-bg min-h-screen flex flex-col">
            <Navbar />
            <main className={`flex-1 flex flex-col pt-24 pb-10 items-center justify-start`}>
                {children}
            </main>
        </div>
    );
}
