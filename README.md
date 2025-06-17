# Overview

Author: Mateusz Boboryko

Media slider with screenshots made by me from some of my favorite video games.

A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Next.js is a React framework for building full-stack web applications. Under the hood, Next.js abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allowed me to focus on building my application instead of spending time with configuration.

Main frontend code is located in /src/app/(slider)

The original code included a backend part in the form of a simple API endpoint (located in /src/app/api/slides), but GitHub Pages can't serve data via next.js API so a workaround needed to be implemented.

## How to run (clarification)

The code had to be changed to be able to host the website on GitHub Pages so running the code locally requires some fixes with separating production and development setups. My focus though was to just host the live website on GitHub Pages and leave the rest as-is.

## How to run (before GitHub Pages setup)

Preferably be on the Node.js v18.17 or later.
Make sure you are in the root directory of the project.

Single command to install node packages and run the application:

```
npm run allWithInstall
```

Open [http://localhost:3000](http://localhost:3000/media-slider) with your browser to see the result.

### Individual commands

To install node packages:

```
npm install
```

To build and run the app:

```
npm run app
```

To run just the development server with hot-reload:

```
npm run dev
```

## Resources

Audio:

- https://www.free-stock-music.com/alexander-nakarada-village-ambiance.html

- https://www.free-stock-music.com/darren-curtis-witch-by-the-sea.html

- https://www.free-stock-music.com/arthur-vyncke-red-forest.html

- https://www.free-stock-music.com/alexander-nakarada-suspensify.html

- https://www.free-stock-music.com/alexander-nakarada-main-theme-overture-the-grand-score.html
