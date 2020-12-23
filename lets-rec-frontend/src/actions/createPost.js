export function createPost(userContent){
    
    let userPost = {
        content: userContent.content,
        user_id: userContent.user_id,
        team_id: userContent.team_id
    }


    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userPost)
        })
        .then(resp => resp.json())
        .then(post => {
            const teamPostsContainer = document.getElementById("team-activity-container")
            const div = document.createElement("div")
            const img = document.createElement("img")
            const h5 = document.createElement("h5")
            const p1 = document.createElement("p")
            const teamName = "@" + document.getElementById("team-page-name").innerText.split(" ").join("")

            div.key = post.id
            div.classList.add("user-post-container")
            img.src = localStorage.pic
            img.classList.add("post-picture")
            img.alt = "profile-icon"
            h5.classList.add("post-username")
            h5.innerText = localStorage.username
            p1.classList.add("post-content")
            p1.innerHTML = `<b>${teamName}</b>` + ` ` + `${post.content}`

            div.append(img)
            div.append(h5)
            div.append(p1)

            teamPostsContainer.prepend(div)

            dispatch(makePost(post))
        })
    }
}

const makePost = input => ({
    type: 'CREATE_POST',
    payload: input
})