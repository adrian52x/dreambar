
const Auth = () => {
    return (
        <div className="relative h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            {/* Hero Content */}
            <div className="z-10 flex h-full flex-col items-center justify-center px-4">
                <div className="max-w-3xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
                        DREAM
                        <span className="text-sky-400">BAR</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
                        Build modern and beautiful websites with this collection of stunning background patterns. 
                        Perfect for landing pages, apps, and dashboards.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300">
                            Get Started
                        </button>
                        <button className="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Auth;
