import { GithubUserRepo } from '@/@types'
import { FaLink } from 'react-icons/fa'

type GithubCardProps = {
    repo: GithubUserRepo
}

export default function GithubCard({ repo }: GithubCardProps) {
    return (
        <div>
            <div className='card w-full bg-base-300 shadow-xl text-white mt-2'>
                <div className='card-body'>
                    <h2 className='card-title'>
                        <FaLink />
                        <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
                    </h2>
                    <p>{repo.description}</p>
                </div>
            </div>
        </div>
    )
}