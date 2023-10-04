import Header from "@/components/Header";

function HomePageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="home-container">
            <Header />
            <div className="mt-24">
                {children}
            </div>
        </div>
    );
}

export default HomePageLayout;