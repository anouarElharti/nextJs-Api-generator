import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Link from "next/link";
import "simplebar-react/dist/simplebar.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & Open source Text Similarity API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine
            <br />
            Text similarity.
          </LargeHeading>
          <Paragraph className="max-x-xl lg:text-left">
            With this API, you can determine the similarity between two pieces
            of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API Key
            </Link>
            .
          </Paragraph>
          <div className="relative w-full max-w-lg lg:max-w-xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="Similarity text API"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
