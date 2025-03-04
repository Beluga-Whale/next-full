"use client";

import { useSearchParams } from "next/navigation";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function Home({}) {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");
  const params = { search: query || null };
  const posts = await client.fetch(STARTUPS_QUERY, params);
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
