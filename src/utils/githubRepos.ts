import type Repo from '../types/Repo';

export async function queryReposForUser(username: string): Promise<Repo[]> {
  const repoParams: Record<'sort' | 'direction' | 'per_page', string> = {
    sort: 'created',
    direction: 'descending',
    per_page: '10',
  };

  const searchParams = new URLSearchParams(repoParams).toString();
  console.log(`https://api.github.com/users/${username}/repos?${searchParams}`);
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?${searchParams}`,
  );

  return response.json();
}
