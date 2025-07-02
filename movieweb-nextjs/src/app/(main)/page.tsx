// app/page.tsx
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategorySection from "@/components/home/CategorySection";

export default function Home() {
    const posters = Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkuHNNYaki4fm2nIL0okluYpXS_ovDagy9A&s",
    }));

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Poster Grid */}
            <div className="absolute inset-0 -z-10">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px w-full h-full">
                    {posters.map((poster) => (
                        <div key={poster.id} className="w-full h-full">
                            <img
                                src={poster.src}
                                alt={`Poster ${poster.id}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Overlay tối để nổi nội dung */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
                {/* Nút Play */}
                <div className="mb-8">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <Play className="w-12 h-12 fill-white ml-1" />
                    </div>
                </div>

                {/* Tiêu đề */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                    The Best Streaming Experience
                </h1>

                {/* Mô tả */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime,
                    anywhere. Enjoy the latest blockbusters, classic movies, and more.
                </p>

                {/* Nút hành động */}
                <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 px-8 py-3 text-lg font-semibold rounded-full"
                >
                    <Link href="/movies">▶ Start Watching Now</Link>
                </Button>
            </div>
             {/*category section movive */}
            <CategorySection/>
        </div>

    );
}
