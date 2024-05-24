"use client";
import { posts } from "../constants/posts";
import { useEffect } from "react";
import clsx from "clsx";

const PostFilter = ({
  setFiltered,
  setActiveCategory,
  activeCategory,
}) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(posts);
      return;
    }

    const filtered = posts.filter((post) =>
      post.tags?.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <>
      <div className="flex gap-5 my-10 flex-wrap justify-center dark:text-white">
        <button
          className={clsx(
            "py-1 px-3",
            activeCategory === "all"
              ? "bg-sky-400 text-white rounded-md"
              : null
          )}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        <button
          className={clsx(
            "py-1 px-3",
            activeCategory === "artificial intelligence"
              ? "bg-sky-400 text-white rounded-md"
              : null
          )}
          onClick={() =>
            setActiveCategory("artificial intelligence")
          }
        >
          AI
        </button>
        <button
          className={clsx(
            "py-1 px-3",
            activeCategory === "Enviroment"
              ? "bg-sky-400 text-white rounded-md"
              : null
          )}
          onClick={() => setActiveCategory("Enviroment")}
        >
          Enviroment
        </button>
      </div>
    </>
  );
};

export default PostFilter;
