import { Header } from "../components/Header";
import { Lesson } from "../components/Lesson";
import { Sidebar } from "../components/Sidebar";
import { Videoplayer } from "../components/Videoplayer";

export function Event() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Videoplayer />
                <Sidebar />
            </main>
        </div>
    )
}