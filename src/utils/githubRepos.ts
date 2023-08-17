import ogs from 'open-graph-scraper';
import type Repo from '../types/Repo';

export async function queryReposForUser(username: string): Promise<Repo[]> {
  const repoParams: Record<'sort' | 'direction' | 'per_page', string> = {
    sort: 'created',
    direction: 'descending',
    per_page: '10',
  };

  const searchParams = new URLSearchParams(repoParams).toString();
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?${searchParams}`,
  );

  const repos: Repo[] = await response.json();

  return await Promise.all(
    repos.map(
      async (repo: { name: string; description: string; html_url: string }) => {
        const { result } = await ogs({ url: repo.html_url });
        if (result.ogImage) {
          const ogImage: {
            height?: number;
            width?: number;
            type?: string;
            url?: string;
          } = result.ogImage[0];
          return { ...repo, ogImage };
        }
        return repo;
      },
    ),
  );
}
