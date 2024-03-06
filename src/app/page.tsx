import Image from "next/image";
//import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
        <div className="container">
          <div className="header">
          <div className= "flex w-full justify-center">
          <h1>Ilmuwan yang luar biasa</h1>
          </div>
            <div className= "flex w-full justify-center">
                <Gallery/>
            </div>
          </div>
        </div>
      );
    };