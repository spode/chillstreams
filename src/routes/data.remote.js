import { query } from "$app/server";
import { MY_API_KEY } from "$env/static/private";
import * as v from "valibot";

export const getPlaylistItems = query(v.string(), async (playlistId) => {
  const url =
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}key=${MY_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
});

export const getLivestreamsByChannel = query(v.string(), async (channelId) => {
  // const working = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&type=video&channelId=UCSJ4gkVC6NrvII8umztf0Ow&key=${MY_API_KEY}`
  const url =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&type=video&channelId=${channelId}&key=${MY_API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
});
