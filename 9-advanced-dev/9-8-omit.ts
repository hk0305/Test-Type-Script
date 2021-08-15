{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Pick과 달리 없는 속성도 선언이 가능하다.
  type VideoMetadata = Omit<Video, "url" | "data" | "sample">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
