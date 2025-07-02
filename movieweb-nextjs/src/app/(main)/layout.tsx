
import Header from "@/components/header";
export default function MainLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="main-layout ">
            <Header/>
            <main className="">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; 2023 My Application</p>
            </footer>
        </div>
    );
}