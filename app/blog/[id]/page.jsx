import React from 'react';

// Component for the post header
const PostHeader = ({ image_url, tags, title, publishDate }) => {
    return (
        <div
            className="mx-auto max-w-[1400px] md:w-[90%] bg-cover relative"
            style={{
                backgroundImage: `url(${image_url})`,
                backgroundPosition: "100%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute top-0 bg-black/40 w-full h-full" />
            <div className="relative p-10 flex justify-center flex-col w-full items-center">
                <span className="bg-sky-400 px-2 text-gray-50 rounded-md">
                    {tags}
                </span>
                <h1 className="text-3xl font-bold text-gray-50 mt-5">
                    {title}
                </h1>
                <div className="w-full flex flex-col justify-center items-center gap-4 text-gray-50">
                    <div className="flex flex-col gap-1 text-center font-bold">
                        <span>{publishDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component for the post content
const PostContent = ({ paragraphs = [] }) => {
    return (
        <div className="wrapper mt-10 text-gray-900 dark:text-gray-50 flex flex-col gap-5">
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};

// Main page component
const Page = ({ params, searchParams }) => {
    const { image_url, tags, title, publishDate, paragraphs } = searchParams;

    return (
        <div className="py-10 bg-cover">
            <PostHeader
                image_url={image_url}
                tags={tags}
                title={title}
                publishDate={publishDate}
            />
            <PostContent paragraphs={paragraphs} />
        </div>
    );
};

export default Page;
