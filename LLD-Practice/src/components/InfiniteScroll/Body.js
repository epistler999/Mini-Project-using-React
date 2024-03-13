import { useState, useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { MemeCard } from "./MemeCard";

const Body = () => {
  const [showShimmer, setShowShimmer] = useState(false);
  const [memesList, setMemesList] = useState([]);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const jsonData = await data.json();
    setMemesList((memesList) => [...memesList, ...jsonData.memes]);
    setShowShimmer(false);
  };
  const handleScroll = () => {
    const currHeight = window.innerHeight + window.scrollY;
    if (currHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };
  useEffect(() => {
    fetchMemes();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-wrap">
      {memesList &&
        memesList.map((meme, i) => <MemeCard key={i} data={meme} />)}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
