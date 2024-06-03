import { http, HttpResponse } from "msw";
import moviedbConfig from "./moviedbConfig.json";
import moviedb from "./moviedb.json";

export const handlers = [
  http.get("https://api.themoviedb.org/3/configuration", () => {
    return HttpResponse.json(moviedbConfig);
  }),
  http.get("https://api.themoviedb.org/3/movie/popular", () => {
    return HttpResponse.json({
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
          genre_ids: [878, 12, 28],
          id: 653346,
          original_language: "en",
          original_title: "Kingdom of the Planet of the Apes",
          overview:
            "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
          popularity: 8691.608,
          poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
          release_date: "2024-05-08",
          title: "Kingdom of the Planet of the Apes",
          video: false,
          vote_average: 6.954,
          vote_count: 736,
        },
        {
          adult: false,
          backdrop_path: "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
          genre_ids: [878, 28],
          id: 614933,
          original_language: "en",
          original_title: "Atlas",
          overview:
            "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
          popularity: 2334.605,
          poster_path: "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
          release_date: "2024-05-23",
          title: "Atlas",
          video: false,
          vote_average: 6.704,
          vote_count: 498,
        },
        {
          adult: false,
          backdrop_path: "/oavbmL3iddJUmC8nQjL6bLHwAP4.jpg",
          genre_ids: [27, 53],
          id: 719221,
          original_language: "en",
          original_title: "Tarot",
          overview:
            "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
          popularity: 2019.501,
          poster_path: "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
          release_date: "2024-05-01",
          title: "Tarot",
          video: false,
          vote_average: 6.47,
          vote_count: 231,
        },
        {
          adult: false,
          backdrop_path: "/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
          genre_ids: [27],
          id: 437342,
          original_language: "en",
          original_title: "The First Omen",
          overview:
            "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
          popularity: 1667.008,
          poster_path: "/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
          release_date: "2024-04-03",
          title: "The First Omen",
          video: false,
          vote_average: 6.804,
          vote_count: 303,
        },
      ],
      total_pages: 1,
      total_results: 4,
    });
  }),
  http.get("https://api.themoviedb.org/3/search/movie", () => {
    return HttpResponse.json({
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
          genre_ids: [27],
          id: 437342,
          original_language: "en",
          original_title: "The First Omen",
          overview:
            "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
          popularity: 1667.008,
          poster_path: "/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
          release_date: "2024-04-03",
          title: "The First Omen",
          video: false,
          vote_average: 6.804,
          vote_count: 303,
        },
      ],
      total_pages: 1,
      total_results: 1,
    });
  }),
  http.get("https://api.themoviedb.org/3/movie", () => {
    return HttpResponse.json(moviedb);
  }),
];
