//  const { default: axios } = require("axios");

import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div +class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj){
  const card = document.createElement('div')
  const imgURL = document.createElement('img')
  const cardInfo = document.createElement('div')
  const userName = document.createElement('h3')
  const usersUsername = document.createElement('p')
  const userLocation = document.createElement('p')
  const userProfile = document.createElement('p')
  const userProfileLink = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')
 
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  userName.classList.add('name')
  usersUsername.classList.add('username')

  imgURL.src = `${obj.avatar_url}`
  userName.textContent = `${obj.name}`
  usersUsername.textContent = `${obj.login}`
  userLocation.textContent = `Location: ${obj.location}`
  userProfile.textContent = `Profile: `
  userProfileLink.href = obj.html_url
  userProfileLink.innerHTML = 'Github'
  userFollowers.textContent = `Followers: ${obj.followers}`
  userFollowing.textContent = `Following: ${obj.following}`
  userBio.textContent = `Bio: ${obj.bio}`

  card.appendChild(imgURL)
  card.appendChild(cardInfo)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(usersUsername)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(userProfileLink)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)

  return card
}

const cards = document.querySelector('.cards')
axios.get('https://api.github.com/users/BradfordMez')
  .then(response =>{
    const card = cardMaker(response.data)
    return card
  })
  .then(card=>{
    cards.appendChild(card)
  })
  .catch(err=>console.log(err.message))
  .finally(()=> console.log('done'))




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/




// {
//   "login": "BradfordMez",
//   "id": 84813031,
//   "node_id": "MDQ6VXNlcjg0ODEzMDMx",
//   "avatar_url": "https://avatars.githubusercontent.com/u/84813031?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/BradfordMez",
//   "html_url": "https://github.com/BradfordMez",
//   "followers_url": "https://api.github.com/users/BradfordMez/followers",
//   "following_url": "https://api.github.com/users/BradfordMez/following{/other_user}",
//   "gists_url": "https://api.github.com/users/BradfordMez/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/BradfordMez/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/BradfordMez/subscriptions",
//   "organizations_url": "https://api.github.com/users/BradfordMez/orgs",
//   "repos_url": "https://api.github.com/users/BradfordMez/repos",
//   "events_url": "https://api.github.com/users/BradfordMez/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/BradfordMez/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": null,
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 24,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2021-05-25T20:30:47Z",
//   "updated_at": "2021-06-18T17:26:45Z"
// }