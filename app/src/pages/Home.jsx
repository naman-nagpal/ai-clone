import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import FormField from "../components/FormField";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-red-500 text-xl uppercase">{title}</h2>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("test");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[42px] text-black-500">Showcase</h1>
        <p className="mt-2 text-gray-500 text-[16px] max-w-[500px] font-bold">
          Browse through AI generated images by using DALL-E AI
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {" "}
            {searchText && (
              <h2 className="font-medium text-gray-500 text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-black-500">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards data={allPosts} title="No Posts Yet" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
