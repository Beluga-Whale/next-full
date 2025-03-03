"use client";

import { useSearchParams } from "next/navigation";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default function Home({}) {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Halay" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robot",
      title: "This is a title",
    },
  ];

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
            posts.map((post, index: number) => (
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
