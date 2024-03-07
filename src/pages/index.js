import Image from "next/image";
import { Inter } from "next/font/google";
import Soma from "@/pages/components/Soma";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
      <div>
          <Soma/>
      </div>
      );
}
