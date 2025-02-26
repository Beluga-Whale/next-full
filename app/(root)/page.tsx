"use client";

import { useSearchParams } from "next/navigation";
import SearchForm from "../components/SearchForm";

export default function Home({}) {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas. and Get Noticed in Virtual Cometitions
        </p>
        <SearchForm query={query ?? ""} />
      </section>
    </>
  );
}
// NOTE 1:50:59
