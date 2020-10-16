import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJzD41ClldhL3hGKLlBLRE43wD5fVHkktex9fvFhj8E=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="NFL"
        verified
        subs="6.93M"
        noOfVideos={19072}
        description="The official YouTube page of the NFL. Subscribe to the NFL YouTube channel to see immediate in-game highlights from your ...
       "
      />

      <hr />

      <VideoRow
      views="31,729"
      subs="6.98M"
      description="Top Defense from Week 5 | NFL 2020 Highlights

      Subscribe to NFL: http://j.mp/1L0bVBu"
      timestamp="13 hours ago"
      channel="NFL"
      title="Top Defense from Week 5 | NFL 2020 Highlights"
      image="https://i.ytimg.com/an_webp/Fa8psu9948E/mqdefault_6s.webp?du=3000&sqp=CK6jkvwF&rs=AOn4CLC77crmxaGyuH4mnG_NhNTLfy0fWQ"
      />
      <VideoRow
      views="19K"
      subs="626"
      description="I do not own any of the content. All visual content belongs to the NFL.
      NFL
      http://www.nfl.com/"
      timestamp="5 years ago"
      channel="TFM Productions"
      title="2013-14 NFL Season Highlights"
      image="https://i.ytimg.com/an_webp/PGR_nXTPAfs/mqdefault_6s.webp?du=3000&sqp=CKS9lvwF&rs=AOn4CLAcoELeB0s51eD_yh94-5BTifAgSQ"
      />
      <VideoRow
      views="114K"
      subs="5.96K"
      description="All rights go to ESPN, Fox, CBS, NBC, the NFL & its broadcasters. I do not own the music and the footage used in this video."
      timestamp="1 year ago"
      channel="All Highlights"
      title="49ers vs Seahawks 2013 NFC Championship"
      image="https://i.ytimg.com/vi/cRGTA_GgiXs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAKKBjg15YOmdeAOfihxVkwQISMxw"
      />
      <VideoRow
      views="13K"
      subs="6.98M"
      description="Drew Brees threw for 325 yards, 1 passing touchdown, and even rushed in 1 touchdown himself! The Los Angeles Chargers take ..."
      timestamp="9 hours ago"
      channel="NFL"
      title="Drew Brees Battles Back w/ 325 Passing Yds & 2 TDs! | NFL 2020 Highlights"
      image="https://i.ytimg.com/an_webp/3Cr84PFBMFw/mqdefault_6s.webp?du=3000&sqp=CKC7lvwF&rs=AOn4CLC4uqzONQiz53C1QwGSiSfd_Hi2HA"
      />
      <VideoRow
      views="31,729"
      subs="6.98M"
      description="Top Defense from Week 5 | NFL 2020 Highlights

      Subscribe to NFL: http://j.mp/1L0bVBu"
      timestamp="13 hours ago"
      channel="NFL"
      title="Top Defense from Week 5 | NFL 2020 Highlights"
      image="https://i.ytimg.com/an_webp/Fa8psu9948E/mqdefault_6s.webp?du=3000&sqp=CK6jkvwF&rs=AOn4CLC77crmxaGyuH4mnG_NhNTLfy0fWQ"
      />
      <VideoRow
      views="19K"
      subs="626"
      description="I do not own any of the content. All visual content belongs to the NFL.
      NFL
      http://www.nfl.com/"
      timestamp="5 years ago"
      channel="TFM Productions"
      title="2013-14 NFL Season Highlights"
      image="https://i.ytimg.com/an_webp/PGR_nXTPAfs/mqdefault_6s.webp?du=3000&sqp=CKS9lvwF&rs=AOn4CLAcoELeB0s51eD_yh94-5BTifAgSQ"
      />
      <VideoRow
      views="114K"
      subs="5.96K"
      description="All rights go to ESPN, Fox, CBS, NBC, the NFL & its broadcasters. I do not own the music and the footage used in this video."
      timestamp="1 year ago"
      channel="All Highlights"
      title="49ers vs Seahawks 2013 NFC Championship"
      image="https://i.ytimg.com/vi/cRGTA_GgiXs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAKKBjg15YOmdeAOfihxVkwQISMxw"
      />
      <VideoRow
      views="13K"
      subs="6.98M"
      description="Drew Brees threw for 325 yards, 1 passing touchdown, and even rushed in 1 touchdown himself! The Los Angeles Chargers take ..."
      timestamp="9 hours ago"
      channel="NFL"
      title="Drew Brees Battles Back w/ 325 Passing Yds & 2 TDs! | NFL 2020 Highlights"
      image="https://i.ytimg.com/an_webp/3Cr84PFBMFw/mqdefault_6s.webp?du=3000&sqp=CKC7lvwF&rs=AOn4CLC4uqzONQiz53C1QwGSiSfd_Hi2HA"
      />
    </div>
  );
}

export default SearchPage;
