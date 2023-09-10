let searchedUser = document.querySelector('[data-searchUser]')
let searchButton = document.querySelector('[data-searchButton]')

let userProfileImage = document.querySelector('[data-userImage]')
let userName = document.querySelector('[data-userName]')
let userJoined = document.querySelector('[data-userJoined]')
let userId = document.querySelector('[data-UserId]')
let userBio = document.querySelector('[data-userBio]')
let userRespos = document.querySelector('[data-repos]')
let userFollowers = document.querySelector('[data-followers]')
let userFollowing = document.querySelector('[data-following]')
let userLocation = document.querySelector('[data-userLocation]')
let userBlog = document.querySelector('[data-userBlog]')
let userTwitter = document.querySelector('[data-userTwitter]')
let userCompany = document.querySelector('[data-userCompany]')


getData("mohammedmubashir007")

searchButton.addEventListener('click', (e) => {
    if (!searchedUser.value) {
        getData("mohammedmubashir007")
    } else {
        getData(searchedUser.value)
    }

})


function renderUI(data) {

    userProfileImage.src = data.avatar_url
    userName.innerText = data.name
    userJoined.innerText = formatdate(data.created_at)
    userId.innerText = data.login
    userBio.innerText = validateBio(data.bio)
    userRespos.innerText = data.public_repos.toString()
    userFollowers.innerText = data.following.toString()
    userFollowing.innerText = data.followers.toString()
    userLocation.innerText = (data.location) ? data.location : "Not Available"
    userBlog.innerText = (data.blog) ? data.blog : "Not Available"
    userTwitter.innerText = (data.twitter_username) ? data.twitter_username : "Not Available"
    userCompany.innerText = (data.company) ? data.company : "Not Available"

}

function formatdate(joinedDate) {

    const dateString = `${joinedDate}`;
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate
}

function validateBio(bio) {
    console.log("inside bio function");
    if (bio === null) {
        console.log("inside null bio");
        return "This profile has no bio"
    } else {
        console.log("inside bio");
        return bio
    }
}

async function getData(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`)
        let data = await response.json()
        console.log(data);
        renderUI(data)
    } catch (err) {

    }

}

