# 👣 Footsteps - Learning Resources Aggregator

A search 🔎engine of community-made 🧑‍🤝‍🧑learning resources for the 21st-century learner.👨‍💻👩‍💻Learn by following the footsteps (resources) of experts or make your own, giving others the right advice/resources to learn.

<p align="center">
   <a href="https://github.com/fnplus/footsteps-app/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/fnplus/footsteps-app"></a>
   <a href="https://github.com/fnplus/footsteps-app/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/fnplus/footsteps-app"></a>
   <a href="https://github.com/fnplus/footsteps-app/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/fnplus/footsteps-app"></a>
</p>

<p align="center">
   <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-app?ref=badge_shield"><img alt="FOSSA Status" src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffnplus%2Fproject-footsteps-app.svg?type=shield"></a>
   <a href="https://github.com/fnplus/footsteps-app/blob/master/LICENSE.txt"><img alt="LICENSE" src="https://img.shields.io/github/license/fnplus/footsteps-app"></a>
   <a href="https://www.codacy.com/manual/fnplus/footsteps-app?utm_source=github.com&utm_medium=referral&utm_content=fnplus/footsteps-app&utm_campaign=Badge_Grade"><img alt="CODACY" src="https://api.codacy.com/project/badge/Grade/66839011f8424527bdf4a39b60ea6b4b"></a>
   <a href="https://www.codefactor.io/repository/github/fnplus/footsteps-app"><img alt="CODEFACTOR" src="https://www.codefactor.io/repository/github/fnplus/footsteps-app/badge"></a>
   <a href="https://app.netlify.com/sites/footsteps-app/deploys"><img alt="FOSSA Status" src="https://api.netlify.com/api/v1/badges/8e60385a-c75c-4b48-9d01-975f43285914/deploy-status"></a>
</p>

## 🤷 About

We envisioned the project to solve the problems faced by 21st-century learners. A modern learner finds a flood of resources from Google Search but doesn't always find the right resources since it's the website with the best SEO (search engine optimisation) that wins. There are so many free resources available on the internet made by experts in their field and yet we pay for outdated courses promoted by big companies and universities.

With Footsteps app & [browser extension](https://github.com/fnplus/footsteps-extension), we take a mentor/subject knowledge expert first approach to solve the problem. The domain experts save their learning journey with our app and browser extension & make it available for everyone else to follow. Every resource is called a 'footstep' (added in a chronological manner) and a collection of footsteps makes up a learning path. The learner can "fork" the learning path made by the expert and keep a track of his progress. The app suggests resources & keeps an updated list with users upvotes & collaborative filtering.

## 🧐 The Need (as seen on the web)

Here are few examples of why we came up with footsteps:

[**Reddit thread - "About IBMs Data Science Certification"**](https://www.reddit.com/r/datascience/comments/eleuz9/about_ibms_data_science_certification/)

## 🤩 Proposed/Upcoming features

| **SL No.** | **Feature**                                                                                        | **Status** |
| ---------- | -------------------------------------------------------------------------------------------------- | ---------- |
| 01         | Ability to make the path private/public.                                                           |            |
| 02         | The ability to "fork" a learning path & suggest changes.                                           |            |
| 03         | A collaborative filtering recommendation system for recommending the right resources to a learner. |            |
| 04         | Ability to save your progress (with a progress bar) in a learning path.                            |            |
| 05         | Ability to upvote a learning path.                                                                 |            |
| 06         | Ability to follow a user.                                                                          |            |
| 07         | A modified home page UI with a search bar, active learning paths & new leaning paths by 'followed' users|        |

## 🚀 Quick start

### **Here is our quickstart guide. See our [Wiki](https://github.com/fnplus/footsteps-app/wiki/Contributing-to-Footsteps-App) for detailed instructions!**

1. **Install the Gatsby CLI.**

   ```shell
   npm install -g gatsby-cli
   ```

2. **Fork & Clone the repo**

   ```shell
   git clone https://github.com/[yourname]/footsteps-app
   ```

3. **Install node dependencies**

   Use the Gatsby CLI to create a new site, specifying the starter.

   ```shell
   cd footsteps-app/
   npm install
   ```

4. **Add Credentials to .env**

   Create `.env.development` file and add your variables listed below.

   Use the below credentials for testing purposes

   ```shell
   GATSBY_HASURA_GRAPHQL_URL=http://rle-test.herokuapp.com/v1/graphql
   GATSBY_HASURA_GRAPHQL_ADMIN_SECRET=!footstepstest!
   GATSBY_FIREBASE_API_KEY=AIzaSyCfv2UcXCifCqmo6PhpdjKajVcpP_8Al9M
   GATSBY_FIREBASE_AUTH_DOMAIN=fnplus-rle-test.firebaseapp.com
   GATSBY_FIREBASE_DATABASE_URL=https://fnplus-rle-test.firebaseio.com
   GATSBY_FIREBASE_PROJECT_ID=fnplus-rle-test
   GATSBY_FIREBASE_STORAGE_BUCKET=fnplus-rle-test.appspot.com
   GATSBY_FIREBASE_MESSAGING_SENDER_ID=1042822146411
   GATSBY_FIREBASE_APP_ID=1:1042822146411:web:d09d2baa58dd82ff49842e
   GATSBY_GOOGLE_TRACKING_ID=UA-154496987-1
   ```

   For access to the Firebase project, please fill [this](https://airtable.com/shrOevwzFNas0wis3) form.

   For access to the testing DB, use [this](https://rle-test.herokuapp.com/console/login) link & enter '!footstepstest!' as the password.

5. **Start developing.**
   Navigate into your new site’s directory and start it up.

   ```sh
   gatsby develop
   ```

6. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `footsteps-app` directory in your code editor of choice and edit files under `src`. Save your changes and the browser will update in real time!

## 🎓 Learning Gatsby

Full documentation for Gatsby lives [on the website](https://gatsbyjs.org/).

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples head [to our documentation](https://gatsbyjs.org/docs/).** In particular, check out the “<i>Guides</i>”, “<i>API Reference</i>”, and “<i>Advanced Tutorials</i>” sections in the sidebar.

We welcome suggestions for improving our docs. See the [“how to contribute”](https://gatsbyjs.org/contributing/how-to-contribute/) documentation for more details.

**Start Learning Gatsby: [Follow the Tutorial](https://gatsbyjs.org/tutorial/) · [Read the Docs](https://gatsbyjs.org/docs/)**

## :memo: License

Licensed under the [GPL v3 License](./LICENSE).

## :heart: Thanks

Thanks to our many contributors and to [Netlify](https://www.netlify.com/) & [Heroku](https://www.heroku.com) for hosting [footsteps.dev](https://footsteps.dev).
