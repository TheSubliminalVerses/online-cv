import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function Resume() {
    return (
        <main className='bg-white min-h-screen'>
            <div className='container mx-auto grid grid-cols-1'>
                <Link href="/" className='text-black btn btn-warning my-10'>
                    <FaArrowLeft className='text-2xl inline mr-2' />
                    <p>Go Back</p>
                </Link>
                <div className='card w-full bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title text-5xl my-2'>Michael Adrian Polesensky</h2>
                        <hr />
                        <section className='my-2'>
                            <h2 className='text-3xl text-secondary-content'>Profile</h2>
                            <p>An active student with enthusiasm for sport, art, cooking, photography and zoology</p>
                        </section>
                        <hr />
                        <section>
                            <h2 className='text-3xl text-secondary-content'>Education</h2>
                            <section className='my-2'>
                                <h3>2007 - 2020</h3>
                                <h3 className='font-semibold'>Cambridge International School</h3>
                                <p>Uprkova 3 Bratislava</p>
                                <p>Cambridge International School is an English language international school with a curriculum from the University of Cambridge.</p>
                            </section>
                            <section className='my-2'>
                                <h3>2017</h3>
                                <h3 className='font-semibold'>CAIE IGCSE exams</h3>
                                <p>Biology(A*), Chemistry(A*), German(A*), English as a Second Language with Grade 2(TWO) in Oral/Aural(A), Geography(A), Mathematics(A), History(C)</p>
                            </section>
                            <section className='my-2'>
                                <h3>2018</h3>
                                <h3 className='font-semibold'>CAIE GCE AS exams</h3>
                                <p>Biology(B), Chemistry(B), Physics(C)</p>
                            </section>
                            <section className='my-2'>
                                <h3>2019</h3>
                                <h3 className='font-semibold'>CAIE GCE AS and A level exams</h3>
                                <p>Biology(C), Chemistry(C), Computer Science - AS Level (A), Mathematics - AS level (B)</p>
                            </section>
                            <section className='my-2'>
                                <h3>2020</h3>
                                <h3 className='font-semibold'>Slovak School Leaving Certificate</h3>
                            </section>
                            <section className='my-2'>
                                <h3>2020 - 2021</h3>
                                <h3 className='font-semibold'>Holland Study Center International Foundation Year</h3>
                            </section>
                            <section className='my-2'>
                                <h3>2021 - 2022</h3>
                                <h3 className='font-semibold'>Vrije Universitat (VU)</h3>
                            </section>
                        </section>
                        <hr />
                        <section>
                            <h2 className='text-3xl text-secondary-content'>Computer Skills</h2>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>MS PowerPoint</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='35' max='100' />
                                <p>Intermediate Level</p>
                            </section>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>MS Word</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='40' max='100' />
                                <p>Intermediate Level</p>
                            </section>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>MS Excel</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='58' max='100' />
                                <p>Intermediate Level</p>
                            </section>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>Python</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='75' max='100' />
                                <p>Post-Intermediate Level</p>
                            </section>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>HTML/CSS</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='50' max='100' />
                                <p>Intermediate Level</p>
                            </section>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>Java/JavaScript</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='85' max='100' />
                                <p>Advanced Level</p>
                            </section>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>C/C++</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='80' max='100' />
                                <p>Post-Intermediate Level</p>
                            </section>
                            <section className='my-2 grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1'>
                                <h3 className='inline font-bold'>R</h3>
                                <progress className='progress progress-primary w-96 mt-2' value='10' max='100' />
                                <p>Beginner Level</p>
                            </section>
                        </section>
                        <hr />
                        <section>
                            <h2 className='text-3xl text-secondary-content'>Interests</h2>
                            <section>
                                <p>I enjoy playing tennis. I have been playing this sport actively for at least 10 years now, alongside playing tennis, I used to attend swimming classes for 2 years but had to give up after 2 years due to health issues. I have an active interest in Bodybuilding and Fitness and go to the gym 3-4 times a week if I can.

                                    I love people and animals and enjoy taking care of them, hence my love of Biology. I always wanted to work in a place where I can be around animals and care for them.

                                    I am also working on my musical career, I play guitar, both electric and acoustic, and the piano. I upload my music on YouTube. This interest has lasted for 6 years now.

                                    I am also really interested in photography for a year now.</p>
                            </section>
                        </section>
                        <hr />
                        <section>
                            <h2 className='text-3xl text-secondary-content'>Accomplishments</h2>
                            <section>
                                <section className='my-2'>
                                    <h3 className='font-semibold'>Psychological First Aid - John Hopkins University</h3>
                                    <div className='grid grid-cols-1'>
                                        <p>Name: Psychological First Aid</p>
                                        <p>Issuing Organization: Coursera</p>
                                        <p>Issue Date: October 2021</p>
                                        <p>Expiration Date: <i>This Certificate Does Not Expire</i></p>
                                        <p>Credential ID: TCKFTCSUK7QD</p>
                                        <p>Credential URL: <a className='link link-primary' target='_blank' rel='noreferrer' href="https://coursera.org/share/a9337b9eb839a16ff7046353a5c64f8c">Validate Certificate</a></p>
                                    </div>
                                </section>
                                <section className='my-2'>
                                    <h3 className='font-semibold'>Bugs101 - University Of Alberta</h3>
                                    <div className='grid grid-cols-1'>
                                        <p>Name: Bugs101: Insect Human Interactions</p>
                                        <p>Issuing Organization: Coursera</p>
                                        <p>Issuing Date: March 2023</p>
                                        <p>Expiration Date: <i>This Certificate Does Not Expire</i></p>
                                        <p>Credential ID: WSZWUT89X7D5</p>
                                        <p>Credential URL: <a className='link link-primary' target='_blank' rel='noreferrer' href="https://coursera.org/share/8980beb0e73bbbc7ae90e6880808c619">Validate Certificate</a></p>
                                    </div>
                                </section>
                                <section className='my-2'>
                                    <h3 className='font-semibold'>IT Fundamentals for Cybersecurity - IBM</h3>
                                    <div className='grid grid-cols-1'>
                                        <p>Name: IT Fundamentals for Cybersecurity Specialization</p>
                                        <p>Issuing Organization: Coursera</p>
                                        <p>Issue Date: December 2022</p>
                                        <p>Expiration Date: <i>This Certificate Does Not Expire</i></p>
                                        <p>Credential ID: WVGAVEXTY5RM</p>
                                        <p>Credential URL: <a className='link link-primary' target='_blank' rel='noreferrer' href="https://coursera.org/share/d3d3e5bf46627d73952cfbae03521f5a">Validate Certificate</a></p>
                                    </div>
                                </section>
                                <section className='my-2'>
                                    <h3 className='font-semibold'>React Front To Back 2022</h3>
                                    <div className='grid grid-cols-1'>
                                        <p>Name: React Front To Back 2022</p>
                                        <p>Instructor: Brad Traversy</p>
                                        <p>Date: Nov 27 2022</p>
                                        <p>Credential URL: <a className='link link-primary' target='_blank' rel='noreferrer' href="https://www.udemy.com/certificate/UC-e13ba134-0b73-45ba-bf10-312ad22fc492/">Validate Certificate</a></p>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}