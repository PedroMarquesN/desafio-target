import Image from "next/image";
import { Inter } from "next/font/google";
import Soma from "@/pages/components/Soma";
import FibonacciChecker from "@/pages/components/Fibonacci";
import DescobrindoLogica from "@/pages/components/DescobrindoLogica";
import InversaoString from "@/pages/components/InversaoString";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-purple-300 to-purple-800 h-screen">
            <div className="max-w-md mx-auto p-4">
                <div className="mb-8">
                    <Soma />
                </div>
                <div className="mb-8">
                    <FibonacciChecker />
                </div>
                <div className="mb-8">
                    <DescobrindoLogica />
                </div>
                <div>
                    <InversaoString />
                </div>
            </div>
        </div>
    );
}

