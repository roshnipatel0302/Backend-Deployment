require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

const githubData ={
    "login": "roshnipatel0302",
    "id": 190713835,
    "node_id": "U_kgDOC14P6w",
    "avatar_url": "https://avatars.githubusercontent.com/u/190713835?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/roshnipatel0302",
    "html_url": "https://github.com/roshnipatel0302",
    "followers_url": "https://api.github.com/users/roshnipatel0302/followers",
    "following_url": "https://api.github.com/users/roshnipatel0302/following{/other_user}",
    "gists_url": "https://api.github.com/users/roshnipatel0302/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/roshnipatel0302/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/roshnipatel0302/subscriptions",
    "organizations_url": "https://api.github.com/users/roshnipatel0302/orgs",
    "repos_url": "https://api.github.com/users/roshnipatel0302/repos",
    "events_url": "https://api.github.com/users/roshnipatel0302/events{/privacy}",
    "received_events_url": "https://api.github.com/users/roshnipatel0302/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-12-05T09:25:30Z",
    "updated_at": "2025-02-26T17:26:12Z"
  }

app.get('/', (req, res) => {
  console.log("GET / request received");
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  console.log("GET /home request received");
  res.send('Welcome to home!');
});

app.get('/github', (req, res) => {
    console.log("GET /home request received");
    res.json(githubData);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
