import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import { giphyApi } from "../../api/giphy.api";

export const getGifsByQuery = async (query: string) => {
  const response = await giphyApi<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 10,
    },
  });

  console.log(response.data);
 
  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));

  // fetch(
  //     `https://api.giphy.com/v1/gifs/search?api_key=RqIMvP6u1uBkDSvhCgiBRLT3K7ORMulu&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  // );
};
