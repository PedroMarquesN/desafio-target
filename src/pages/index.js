import Image from "next/image";
import { Inter } from "next/font/google";
import Soma from "@/pages/components/Soma";
import FibonacciChecker from "@/pages/components/Fibonacci";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
      <div className={`bg-gradient-to-r from-purple-300 to-purple-800 h-screen`}>
          <div>
              <Soma/>
          </div>
          <div>
              <FibonacciChecker/>
          </div>

      </div>
      );
}
