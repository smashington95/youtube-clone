import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="The CRAZIEST Moments On Hotel Hell"
          views="3.4M views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Gordon Ramsay"
          image="https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg"
        />
        <VideoCard
          title="Bystander shoots Deputy's attacker in Florida"
          views="1.3 views"
          timestamp="3 years ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GibhXLwf_E2LV7RzNnyDOUgD3HjxBoKQdMQvw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="FOX 4 Now"
          image="https://i.ytimg.com/vi/K4haJRDj0rU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKPn68pETdxEl3TNYRwZt2oZeDSw"
        />
        <VideoCard
          title="The WORST Pizzas Served On Kitchen Nightmares"
          views="32M views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhfLhp4ORmz9Ea6kAJHfTGLlqRwjezQJ_dwng=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Kitchen Nightmares"
          image="https://i.ytimg.com/an_webp/XuQxoM1ArRI/mqdefault_6s_480x270.webp?du=3000&sqp=COT_kfwF&rs=AOn4CLAJdZ8HCOz95ld9IReEhdSPzmm5mw"
        />
        <VideoCard
          title="Officers Have Very Tough Jobs"
          views="116K views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjSktVvcOyZyig6yFM-jZbFOwJIv-viVELeVQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Active Self Protection"
          image="https://i.ytimg.com/vi/36GvJ_eUaAE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCYDL-Z4tH7Ww2PR1h-X99cBsBvQA"
        />
        <VideoCard
          title="Marlon Humphrey Breaks Down Man to Man Coverage, Interceptions, & More! | NFL Film Session"
          views="114K views"
          timestamp="5 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gim_Twd6-eudgOql_TGipq7QDNGbM5cfSPpwg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Play Football"
          image="https://i.ytimg.com/vi/1HFbZGg1mX4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZsDsnvWn9-Pa-9lUJAYNvhnuW6g"
        />
        <VideoCard
          title="Ford Just Ended the Ford Mustang"
          views="96K views"
          timestamp="11 hours ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjmW0qUeE8eMWE4YCxJFWKds8sxmoGDiH5rsw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Scotty Kilmer"
          image="https://i.ytimg.com/vi/tdGO7wHSijw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDVafGHbhjPBK-t_hUQ4q1Y9vgJlQ"
        />
        <VideoCard
          title="The Hypocrisy of this CEO is INSANE...| #grindreel"
          views="62K views"
          timestamp="2 weeks ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgNugUMT0SqYnIVwKPEH0jntG8wfj4q5Xyv7w=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Joshua Fluke"
          image="https://i.ytimg.com/vi/v-Wot04LyyQ/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC-MmSYhrZx6DoJ1a5dYd7MRRC5cA"
        />
        <VideoCard
          title="Black Man Causes Serious Confusion At Chinese Restaurant ((IN RETROSPECT))"
          views="600K views"
          timestamp="7 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjOamCZzFrhJFqQNqcA_8OqND4cfNjEe9DGSQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="laoshu505000"
          image="https://i.ytimg.com/an_webp/W78uO4MU2bU/mqdefault_6s_480x270.webp?du=3000&sqp=CLT-kfwF&rs=AOn4CLAJtAsUAtdGZKAglaW1rb1LluYeew"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
