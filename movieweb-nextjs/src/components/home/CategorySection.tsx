"use client"

import {useEffect, useRef, useState} from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {SwiperSlide,Swiper} from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css'
const categories = [
    {
        name: "Action",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },
    {
        name: "Adventure",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },
    {
        name: "Comedy",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },
    {
        name: "Drama",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },
    {
        name: "Horror",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },{
        name: "Horror3",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },{
        name: "Horror4",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },{
        name: "Horror5",
        movies: [
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
            "/placeholder.svg?height=160&width=120",
        ],
    },
]

export default function CategorySection() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalSlides,setTotalSlides] = useState<number>(0);
    const [isReady, setIsReady] = useState(false);
    const nextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }
    const prevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }
    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            const perView = typeof swiper.params.slidesPerView === 'number'
                ? swiper.params.slidesPerView
                : 4;

            const total = Math.ceil(categories.length / perView);
            setTotalSlides(total);
        }
    },[swiperRef.current])

    useEffect(() => {
        const timeout = setTimeout(() => {
            const total = Math.ceil(categories.length / 4);
            setTotalSlides(total);
            setIsReady(true); // đảm bảo chỉ hiển thị khi Swiper đã được mount và tính toán xong
        }, 0); // hoặc 50ms nếu cần chờ layout render

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className="bg-black text-white min-h-screen p-6 lg:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            Explore our wide variety of categories
                        </h1>
                        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
                            Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
                        </p>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => prevSlide()}
                            className="text-white hover:bg-gray-800 rounded-full"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        {/* Pagination Dots */}
                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <div
                                    onClick={() => {
                                        swiperRef.current?.slideTo(index * 4);
                                        setActiveIndex(index);
                                    }}
                                    key={index}
                                    className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                                        index === activeIndex ? "bg-red-500" : "bg-gray-700"
                                    }`}
                                />
                            ))}
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => nextSlide()}
                            className="text-white hover:bg-gray-800 rounded-full"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
                {isReady && (
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.2}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.name} className="flex">
                                <div className="group cursor-pointer transition-transform bg-gray-700 p-4 rounded-lg w-full">
                                    <div className="grid grid-cols-2 gap-1 mb-4">
                                        {category.movies.map((movie, idx) => (
                                            <div key={idx} className="aspect-[4/4] relative overflow-hidden rounded-lg bg-gray-800">
                                                <img
                                                    src={movie}
                                                    alt={`${category.name} movie ${idx + 1}`}
                                                    className="object-cover transition-transform group-hover:scale-110 w-full h-full"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold">{category.name}</h3>
                                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

            </div>
        </div>
    );
}