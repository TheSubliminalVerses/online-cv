export const GITHUB_API = 'https://api.github.com'

export type GithubUser = GithubUserBase & GithubUserDetails

export type GithubUserBase = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
}

export type GithubUserDetails = {
    name: string
    company: string | null
    blog: string
    location: string | null
    email: string | null
    hireable: boolean | null
    bio: string | null
    twitter_username: string | null
    public_repos: number
    public_gists: number
    following: number
    followers: number
}

export type GithubUserRepo = {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: GithubUser
    html_url: string
    description: string
    stargazers_count: number
    watchers_count: number
    language: string
    open_issues_count: number
    forks: number
    watchers: number
}