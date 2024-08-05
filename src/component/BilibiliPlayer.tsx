import React from "react";

interface BilibiliVideoProps {
  bvid: string;
  autoplay?: boolean;
  videoWidth?: number;
  videoHeight?: number;
}

const BilibiliVideo = ({ bvid, autoplay = false, videoWidth = 640, videoHeight = 360 }: BilibiliVideoProps) => {
  const url = `https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=${autoplay ? 1 : 0}`;

  return (
    <div style={{ width: `100%`, height: `400px` }}>
      <iframe width="100%" height='400px' src={url} frameBorder="0" allowFullScreen title="Bilibili Video" />
    </div>
  );
};

export default BilibiliVideo;
