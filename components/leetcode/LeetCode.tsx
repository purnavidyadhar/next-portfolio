import { leetcode } from "@/types/main"
import SectionWrapper from "../SectionWrapper"
import { motion } from "framer-motion"
import { SiLeetcode } from "react-icons/si"
import { FiTrendingUp, FiAward, FiZap } from "react-icons/fi"

interface Props {
    leetcodeData: leetcode
}

const LeetCode = ({ leetcodeData }: Props) => {
    const { totalSolved, totalQuestions, easySolved, mediumSolved, hardSolved, ranking, contestRating, badges, streak } = leetcodeData;

    return (
        <SectionWrapper id="leetcode" className="lg:min-h-screen py-20">
            <h2 className="text-4xl text-center mb-12">LeetCode Profile</h2>

            <div className="lg:w-4/5 mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Solved Stats Card */}
                <div className="md:col-span-2 bg-white dark:bg-grey-800 p-8 rounded-3xl shadow-sm border border-transparent hover:border-violet-600/20 transition-all">
                    <div className="flex items-center gap-3 mb-8">
                        <SiLeetcode className="text-[#FFA116] w-8 h-8" />
                        <h3 className="text-xl font-bold">Solved Problems</h3>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Progress Circle */}
                        <div className="relative w-40 h-40 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100 dark:text-grey-700" />
                                <motion.circle 
                                    cx="80" cy="80" r="70" stroke="#8b5cf6" strokeWidth="12" fill="transparent" 
                                    strokeDasharray="440"
                                    initial={{ strokeDashoffset: 440 }}
                                    animate={{ strokeDashoffset: 440 - (440 * (totalSolved / totalQuestions)) }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-3xl font-black">{totalSolved}</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Solved</span>
                            </div>
                        </div>

                        {/* Difficulty Breakdown */}
                        <div className="flex-1 w-full space-y-4">
                            <div className="space-y-1">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-teal-500 uppercase">Easy</span>
                                    <span className="text-xs text-gray-400">{easySolved} / 933</span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-grey-700 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${(easySolved/933)*100}%` }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-teal-500 rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-[#FEB236] uppercase">Medium</span>
                                    <span className="text-xs text-gray-400">{mediumSolved} / 2029</span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-grey-700 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${(mediumSolved/2029)*100}%` }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-[#FEB236] rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-rose-500 uppercase">Hard</span>
                                    <span className="text-xs text-gray-400">{hardSolved} / 916</span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-grey-700 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${(hardSolved/916)*100}%` }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-rose-500 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vertical Sidebar Stats */}
                <div className="space-y-6">
                    {/* Ranking Card */}
                    <div className="bg-white dark:bg-grey-800 p-6 rounded-3xl shadow-sm border border-transparent hover:border-violet-600/20 transition-all flex items-center gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-2xl text-blue-500">
                            <FiTrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Global Ranking</p>
                            <h4 className="text-xl font-black">{ranking}</h4>
                        </div>
                    </div>

                    {/* Contest Rating */}
                    <div className="bg-white dark:bg-grey-800 p-6 rounded-3xl shadow-sm border border-transparent hover:border-violet-600/20 transition-all flex items-center gap-4">
                        <div className="bg-violet-50 dark:bg-violet-900/20 p-3 rounded-2xl text-violet-500">
                            <FiZap size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Contest Rating</p>
                            <h4 className="text-xl font-black">{contestRating}</h4>
                        </div>
                    </div>

                    {/* Streak & Badges */}
                    <div className="bg-white dark:bg-grey-800 p-6 rounded-3xl shadow-sm border border-transparent hover:border-violet-600/20 transition-all flex items-center gap-4">
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-2xl text-amber-500">
                            <FiAward size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Badges Earned</p>
                            <h4 className="text-xl font-black">{badges} (+{streak}d streak)</h4>
                        </div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    )
}

export default LeetCode;
