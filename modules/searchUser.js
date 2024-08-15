export function findUser(name) {
  const githubName = name;

  async function getUser(user) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      });

      const userInfo = await response.json();
      for (const key in userInfo) {
        if (userInfo[key] == null) {
          userInfo[key] = "null";
        }
      }

      const name = (document.getElementById("name-id").innerText =
        userInfo["login"]);
      const email = (document.getElementById("email-id").innerText =
        userInfo["email"]);
      const company = (document.getElementById("company-id").innerText =
        userInfo["company"]);
      const location = (document.getElementById("location-id").innerText =
        userInfo["location"]);
      const followers = (document.getElementById("followers-id").innerText =
        userInfo["followers"]);
      const repos = (document.getElementById("repos-id").innerText =
        userInfo["public_repos"]);

      const saveButton = document.getElementById("save-button");
      saveButton.addEventListener("click", () => {
        const jsonString = JSON.stringify(userInfo);
        const blob = new Blob([jsonString], { type: "application/json" });

        const link = document.createElement("a");

        link.download = `${user}.json`;

        link.href = URL.createObjectURL(blob);

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      });
    } catch (error) {
      console.log(error);
    }
  }
  getUser(githubName);
}
