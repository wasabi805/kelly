import React from "react";

const HeroPresenter = () => {
  return (
    <section id={"hero"}>
      <h1 className={"title"}>WELCOME</h1>
        <div className={"hero-bg"}>
        <video className={'hero-video'}
               autoPlay={'autoplay'} muted={true}
          src={
            "https://proletdev.s3-us-west-1.amazonaws.com/outrun_grid_animation_loop_creative_commons_1080p.mp4?versionId=null"
          }

        />
      </div>

      <div className={"overlay"} />
    </section>
  );
};

export default HeroPresenter;
