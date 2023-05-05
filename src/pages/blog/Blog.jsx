import React from "react";

const Blog = () => {
  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Four important React Interview Questions and Answers
          </h2>
        </div>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
          <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  React Components
                </span>
              </div>
              <div className="flex-1 mt-28">
                <p className="text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    What are controlled and uncontrolled components in React?
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Controlled components are those whose state is managed by
                  React. They receive the current state value through props and
                  only change when the parent component re-renders. On the other
                  hand, uncontrolled components store their own state
                  internally, which is not managed by React. The value of the
                  component can change outside of React's control, such as
                  through a user's input. Examples of controlled components
                  include input and textarea elements, while an example of an
                  uncontrolled component is a regular HTML element.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="flex">
                <div className="flex items-center flex-1 px-6 py-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-1.jpg"
                    alt=""
                  />
                  <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                    {" "}
                    Wade Warren{" "}
                  </span>
                </div>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                >
                  Read more
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  React Prototype
                </span>
              </div>
              <div className="flex-1 mt-28">
                <p className="text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    How do you validate React props using PropTypes?
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  React provides PropTypes to validate the data types of props
                  passed to a component. PropTypes are added to a component as a
                  property. For example, if you want to validate a component's
                  prop named "name" as a string, you can add PropTypes to the
                  component like this:
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="flex">
                <div className="flex items-center flex-1 px-6 py-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-2.jpg"
                    alt=""
                  />
                  <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                    {" "}
                    Leslie Alexander{" "}
                  </span>
                </div>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                >
                  Read more
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  Node vs Express
                </span>
              </div>
              <div className="flex-1 mt-28">
                <p className="text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    What is the difference between Node.js and Express.js?
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="flex">
                <div className="flex items-center flex-1 px-6 py-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg"
                    alt=""
                  />
                  <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                    {" "}
                    Jenny Wilson{" "}
                  </span>
                </div>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                >
                  Read more
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
