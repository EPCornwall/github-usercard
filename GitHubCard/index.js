import axios from 'axios';
const cards = document.querySelector('.cards')
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



axios.get('https://api.github.com/users/EPCornwall')
.then(function (value){
  cards.appendChild(profileMaker(value))
})
.catch(error =>{
  console.log('Errorz')
})



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
// const liz = 'https://api.github.com/users/EPCornwall'
// axios.get(liz)
// .then(function (value){
// cards.appendChild(profileMaker(value))
// })
// .catch(error =>{
//   console.log(error)
// })
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

function addUsers(arr){
arr.forEach(name =>{
  axios.get(`https://api.github.com/users/${name}`)
  .then(function (value){
    cards.appendChild(profileMaker(value))
  })
  .catch(error =>{
    console.log(error)
  })
})}
addUsers(followersArray);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
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
function profileMaker(profileDataObj){
  //create elements
  const userCard = document.createElement('div')
  const userImage = document.createElement('img')
  const userInfo = document.createElement('div')
  const userName = document.createElement('h3')
  const userUserName = document.createElement('p')
  const userLocation = document.createElement('p')
  const userProfile = document.createElement('p')
  const userProfileLink = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio= document.createElement('p')

  //call used data
  const imgURLs = profileDataObj.data.avatar_url
  const link = profileDataObj.config.url 
  const name =profileDataObj.data.name 
  const screenName =  profileDataObj.data.login 
  const location =  profileDataObj.data.location 
  const followersNum =  profileDataObj.data.followers 
  const followingNum =  profileDataObj.data.following 
  const bio =  profileDataObj.data.bio 


  //nest elements
  userCard.appendChild(userImage)
  userCard.appendChild(userInfo)
  userInfo.appendChild(userName)
  userInfo.appendChild(userUserName)
  userInfo.appendChild(userLocation)
  userInfo.appendChild(userProfile)
  userInfo.appendChild(userFollowers)
  userInfo.appendChild(userFollowing)
  userInfo.appendChild(userBio)

  //set classes + attributes
  userCard.classList.add('card')
  userInfo.classList.add('card-info')
  userName.classList.add('name')
  userUserName.classList.add('username')
  userImage.setAttribute('src', `${imgURLs}`)
  userProfileLink.setAttribute('href',`${link}`)

  //provide content
  userName.textContent = `${name}`
  userUserName.textContent = `${screenName}`
  userLocation.textContent = `Location : ${location}`
  userFollowers.textContent = `Followers: ${followersNum}`
  userFollowing.textContent = `Following: ${followingNum}`
  userBio.textContent = `Bio: ${bio}`
  userProfileLink.textContent = `Link`
  userProfile.textContent = `Profile:`
  userProfile.appendChild(userProfileLink)

  console.log(userCard)
  // cards.appendChild(userCard)
  return userCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
