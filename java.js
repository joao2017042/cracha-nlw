const LinksSocialMedia = {
  github: 'joao2017042',
  youtube: 'channel/UCBAr6mmm3BbQ-Hzg3ulQdrw',
  facebook: 'profile.php?id=100007041582609',
  instagram: 'jaopedro.ferro/',
  twitter: 'Jaum71870631'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    userName.textContent = 'João Pedro Ferro'
  }
}
changeSocialMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
