# YouTube Clone using Youtube V3 API

![JavaScript](https://img.shields.io/badge/JavaScript-yellow) ![React Js](https://img.shields.io/badge/React%20Js-61dafb) ![YouTube V3 API](https://img.shields.io/badge/YouTube%20V3%20API-FF0000)

![Demo App](/src/assets/demo-youtube.png)

## 🧐 About the Project

**YouTube Clone** is a YouTube clone project, developed using React JS and Tailwind CSS, leverages the YouTube V3 API to deliver a seamless video streaming experience. Users can search for videos, view and click search suggestions with debouncing method, and play videos directly from the results. The application also includes a dynamic live chat feature, allowing users to send and view messages in real-time. Tailored for a smooth and responsive user experience, this project replicates core YouTube functionalities while providing a modern and intuitive interface.

---

## ✨ Features

- *Videos Thumbnails List*: Users can browse a` list of Video` thumbnails on the home or landing page, showcasing available videos.
- *Video Playback*: By clicking on a specific video thumbnail, users can `watch and play` the selected `video`.
- *Live Chat and Comments*: On the video playback page, users can `participate in a live chat` by adding comments and `viewing other` users' `comments`, similar to YouTube's live chat. Below the video player, a `nested comments` section is available for further discussions.
- *Search Functionality*: Users can `search` for videos on `any topic`, with `search suggestions`(with debouncing method) provided as they type. Clicking on a suggestion takes them to the relevant `search results`.
- *Search Results List and Playback*: When users receive search results, they can view a curated `list of videos` matching `their query`. Clicking on a video thumbnail from the search results allows them to `play the selected video`.

--- 

## 🛠️ Tech Stack

- **Library:** React Js
- **Language:** JavaScript
- **Styling:** Tailwind Css

---

## ⚙️ Setup Instructions

### Prerequisites
- Node
- npm
  
### Installation Steps

* Download Zip or Clone the repository
```shell
    git clone https://github.com/muhammedadil1024/youtube-clone-V3-api.git
```

```shell
    cd youtube-clone-V3-api
```

* Install all dependencies:
```js
    npm install
```

* Go to [Google Cloud Console](https://console.cloud.google.com/) and Get your Google API Key.
* Setup .env file:
    - Create a .env file in the root of your project directory.
 ```js
    VITE_GOOGLE_API_KEY=your_google_api_key
    VITE_YOUTUBE_VIDEOS_API=https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=
    VITE_YOUTUBE_SEARCH_API=http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=
    VITE_YOUTUBE_CHANNELS_API=https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=
    VITE_YOUTUBE_SEARCH_RESULTS_API=https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=20&q=
```

*  Start the app:
```js
    npm run dev
```

## 📞 Contact

- **Email:** [muhammedadilpv292@gmail.com](mailto:muhammedadilpv292@gmail.com)
- **GitHub:** [Muhammed Adil](https://github.com/muhammedadil1024)
- **LinkedIn:** [Muhammed Adil](https://www.linkedin.com/in/mhd-adil292/)

Thank You!
