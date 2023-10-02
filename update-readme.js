const { Octokit } = require("octokit");

async function updateReadme() {
  const octokit = new Octokit();

  const { data: repos } = await octokit.rest.repos.listForUser({
    username: "your-username",
  });

  const latestProjects = repos
    .slice(0, 3) // Get the latest 3 repositories
    .map((repo) => `- [${repo.name}](https://github.com/${repo.full_name})`)
    .join("\n");

  const newReadmeContent = `
# Hello! 👋

I'm [Your Name](https://your-website.com), a passionate developer working on cool projects.

## Latest Projects

${latestProjects}

## GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=your-username&show_icons=true&theme=radical)
`;

  // Update the README.md file in your repository with newReadmeContent
  // Use the GitHub REST API or a library like @octokit/rest to update the file
}

updateReadme().catch(console.error);
