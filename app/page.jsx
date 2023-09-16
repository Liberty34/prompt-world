import Feed from "@/components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover the possibilities <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        The best prompting tool for free online get the suggestion and other
        prompts from users
      </p>
      <Feed />
    </section>
  );
};

export default Home;
