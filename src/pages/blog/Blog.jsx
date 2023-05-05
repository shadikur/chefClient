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
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-2 lg:max-w-full lg:gap-14">
          <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  React Components
                </span>
              </div>
              <div className="flex-1 mt-16">
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
          </div>
          <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  React Prototype
                </span>
              </div>
              <div className="flex-1 mt-16">
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
          </div>
          <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  Node vs Express
                </span>
              </div>
              <div className="flex-1 mt-16">
                <p className="text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    What is the difference between Node.js and Express.js?
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Node.js is a runtime environment for JavaScript that allows
                  developers to run JavaScript on the server-side. It is used to
                  build server-side applications, such as APIs, web
                  applications, and command-line tools. Express.js is a web
                  framework built on top of Node.js that simplifies the process
                  of building web applications and APIs. Express.js provides a
                  set of features and tools that make it easier to build web
                  applications, such as routing, middleware, and templating.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  Custom Hook
                </span>
              </div>
              <div className="flex-1 mt-16">
                <p className="text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    What is a custom hook, and why would you create one?
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  A custom hook is a function that encapsulates reusable logic
                  that can be shared across multiple components. Custom hooks
                  can be used to abstract away complex logic and reduce
                  repetition in code. Custom hooks can be created to handle any
                  kind of logic, such as state management, data fetching, or
                  event handling. You would create a custom hook when you find
                  yourself repeating the same logic in multiple components. By
                  creating a custom hook, you can encapsulate the logic and
                  reuse it across multiple components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
