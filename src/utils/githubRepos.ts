import Repo from '../types/Repo.ts';

export async function queryReposForUser(username: String): Repo[] {
  const repoParams = {
    sort: 'created',
    direction: 'descending',
    per_page: 10,
  };

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?${new URLSearchParams(
      repoParams,
    ).toString()}`,
  );
  const repos: [{ name: string; description: string; html_url: string }] =
    await response.json();
  return repos;

  return await Promise.all(
    repos.map(
      async (repo: { name: string; description: string; html_url: string }) => {
        const { result } = await ogs({ url: repo.html_url });
        return { ...repo, ogImage: result.ogImage[0] };
      },
    ),
  );
}
