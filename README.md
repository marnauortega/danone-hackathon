![Danone App](/public/screenshot.webp)

<br/>

A landing page and an app to calculate our dietary and environmental impact and to showcase Danone products. Built with [Next.js](https://nextjs.org/) for the Danone Hackathon organized by Nuwe.

## [Live site](https://danone-hackathon.vercel.app/)

<br/><br/>

## 🛠 Tools

<br/>

I've used the new [App router](https://nextjs.org/docs/app/building-your-application/routing) from Next.js 13. Other tools I've used are [Sanity](https://www.sanity.io/) as a headless CMS, and [Framer Motion](https://www.framer.com/motion/) and [Lenis](https://lenis.studiofreight.com/) for animations. The deployment was done with [Vercel](https://vercel.com).

<br/><br/>

## ⚡️ Features

<br/>

- A bespoke design with a unique look and feel, animations, microinteractions and smooth scrolling. Here's the [figma file](https://www.figma.com/file/E1sjyhJczr85WXy2dSkBva/Danone-Hackathon?type=design&node-id=0%3A1&t=NOrsqxQFe1mK8fTa-1)

<br/>

- A diet calculator which offers insight into your ideal calory intake base on the data provided. It also allows to set your personal calory goals.

<br/>

- A Product page with sophisticated sorting and filtering.

<br/>

- A and intuitive search snippet to easily find matching products.

<br/>

- A system of favourite products which allows to track any desired items.

<br/>

- A profile dashboard that allows to both update your dietary data and to view and manage product favourites.

<br/>

- Sanity's headless CMS infrastructure to manage all product information in the simplest and quicket of ways. The studio is deployed hand in hand with the main application, and it is very easy to access.

<br/>

- Fully deployed to Vercel on the edge.

<br/><br/>

## ✅ Code quality

<br/>

The code has been checked with SonarCloud and it passed all tests:

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=marnauortega_drop-zone)](https://sonarcloud.io/summary/new_code?id=marnauortega_drop-zone)

<br/><br/>

## 🗂 Folder layout

<br/>

This is a regular Next 13 app, so you'll find:

- The `app` directory, holding all the routes as `page.js` files. This is folder-based routing, so `/upload/page.js` can be accessed at `https://mainurl.com/upload`.
- The `components` folder, which collects all standalone components, along with the Providers that handle user data.
- The `public` folder, which contains static assets.
  . The `sanity`folder, holding all Sanity related files. Here all data schemas are created to model the structure of the products.

<br/><br/>

## 🏁 Start the app

<br/>

To start the app and run it on a local development server, you must simply run `npm run dev`.

To access sanity's studio visit `https://danone-hackathon.vercel.app/admin`.

If you want to test a production ready build, you'll have to run `npm run build` and, when that's done, `npm run start`.

<br/><br/>

## 🚀 Roadmap

- Make the app fully responsive

- Improve the Product details page
