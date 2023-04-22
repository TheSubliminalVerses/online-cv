import { GITHUB_API, GithubUser, GithubUserRepo } from '@/@types';
import GithubCard from '@/components/GithubCard';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaYoutube, FaTwitter, FaGithub, FaGithubAlt, FaUserFriends, FaUser } from 'react-icons/fa';

export default function Home() {
	const [user, setUser] = useState<GithubUser>({} as GithubUser);
	const [repos, setRepos] = useState<Array<GithubUserRepo>>([]);

	const fetchUser = async (login: string) => {
		const res = await fetch(`${GITHUB_API}/users/${login}`);

		const userData: GithubUser = await res.json();
		setUser(userData);
	};

	const fetchRepos = async (login: string) => {
		const res = await fetch(`${GITHUB_API}/users/${login}/repos`);

		const userRepos: Array<GithubUserRepo> = await res.json();
		setRepos(userRepos);
	};

	useEffect(() => {
		fetchUser('TheSubliminalVerses');
		fetchRepos('TheSubliminalVerses');
	}, []);

	return (
		<div>
			<Head>
				<title>Michael Polesensky portfolio</title>
				<meta name='description' content='Main portfolio page' />
			</Head>

			<main className='bg-white px-10 text-black'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className='text-3xl'>mikethetechboi</h1>
						<ul className='flex items-center gap-8'>
							<li>
								<Link href='/resume' className='btn bg-gradient-to-r from-cyan-500 to-teal-500 border-none px-10 ml-10'>Resume</Link>
							</li>
							<li>
								<a href='#' className='btn btn-secondary'>My Blog</a>
							</li>
						</ul>
					</nav>
					<div className='mx-auto container grid grid-cols-1 gap-8 lg:grid-cols-1 md:grid-cols-1'>
						<div className='text-center'>
							<h2 className='font-bold text-3xl py-2 text-primary-content'>Michael Polesensky</h2>
							<h3 className='font-semibold text-xl py-2'>Web developer</h3>
							<p>I am a web developer with a passion for cooking, photography and zoology</p>
						</div>
						<div className='flex justify-center gap-8'>
							<a className='btn btn-primary btn-circle' href='https://github.com/TheSubliminalVerses' rel='noreferrer' target='_blank'>
								<FaGithub className='text-3xl' />
							</a>
							<a className='btn btn-primary btn-circle' href='https://www.youtube.com/@MikeIsTechBoi' rel='noreferrer' target='_blank'>
								<FaYoutube className='text-3xl' />
							</a>
							<a className='btn btn-primary btn-circle' href='https://twitter.com/MikeIsBoi' rel='noreferrer'>
								<FaTwitter className='text-3xl' />
							</a>
						</div>
					</div>
					<div className='flex justify-center'>
						<Image src='/img-1.jpg' width="300" height="300" alt='profile' className='mask mask-squircle' />
					</div>
					<div className='mx-auto container grid grid-cols-1'>
						<h3 className='text-3xl font-semibold py-2 text-primary-content'>Services I offer</h3>
						<p>Since the beginning of my programming journey I gained experience building large websites.</p>
						<p>I have experience with Redux and using ViteJS as my primary framework.</p>
						<p>I am currently learning NextJS to advance my career.</p>
						<p>I am looking to program front-end for websites using ViteJS or NextJS. I am not yet good enough with my back-end side.</p>
					</div>
				</section>
				<section className='flex justify-center'>
					<div className='stats shadow my-10'>
						<div className='stat'>
							<div className='stat-figure text-secondary'>
								<FaGithubAlt className='text-3xl ml-2' />
							</div>
							<div className='stat-title'>Github Username</div>
							<div className='stat-value text-primary'>{user.login}</div>
						</div>
						<div className='stat'>
							<div className='stat-figure text-secondary'>
								<FaUser className='text-3xl' />
							</div>
							<div className='stat-title'>Followers</div>
							<div className='stat-value text-primary'>{user.followers}</div>
						</div>
						<div className='stat'>
							<div className='stat-figure text-secondary'>
								<FaUserFriends className='text-3xl' />
							</div>
							<div className='stat-title'>Followers</div>
							<div className='stat-value text-primary'>{user.following}</div>
						</div>
					</div>
				</section>
				<section className='flex justify-center'>
					<h2 className='font-semibold text-3xl pb-5'>My Github Repos</h2>
				</section>
				<section>
					{repos.map(repo => (
						<GithubCard repo={repo} key={repo.id} />
					))}
				</section>
			</main>
		</div>
	);
}
