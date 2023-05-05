import React from "react";
import BlogContent from "./BlogContent";
import Pdf from "react-to-pdf";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef();
  // Export to PDF

  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <BlogContent></BlogContent>
    </section>
  );
};

export default Blog;
