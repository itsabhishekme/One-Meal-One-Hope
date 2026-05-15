import Link from "next/link";

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto">

                {/* Hero Section */}
                <section className="text-center mb-20">
                    <div className="inline-block px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                        One Meal One Hope NGO
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                        One Meal <br />
                        <span className="text-green-400">One Hope</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-9">
                        Fighting hunger with dignity, compassion, and action.
                        We believe that no human should sleep hungry while food
                        is wasted around the world every single day.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 mt-10">

                        <Link href="/donate">
                            <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                                Donate Now
                            </button>
                        </Link>

                        <Link href="/become-volunteer">
                            <button className="border border-zinc-700 hover:border-green-500 hover:text-green-400 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
                                Become a Volunteer
                            </button>
                        </Link>

                    </div>
                </section>

                {/* Why We Exist */}
                <section className="mb-20">
                    <div className="bg-zinc-900/60 backdrop-blur-lg border border-zinc-800 rounded-3xl p-10 md:p-14 shadow-2xl">
                        <h2 className="text-4xl font-bold mb-8">
                            Why We Exist
                        </h2>

                        <p className="text-lg leading-9 text-gray-300">
                            Every night, millions sleep hungry — not because food
                            doesn’t exist, but because access doesn’t.
                        </p>

                        <p className="text-lg leading-9 text-gray-300 mt-6">
                            Perfectly edible meals are thrown away daily while families,
                            children, and elderly people struggle to find their next meal.
                            Hunger is not just about food scarcity — it is about broken
                            systems, unequal access, and lack of collective action.
                        </p>

                        <p className="text-lg leading-9 text-gray-300 mt-6">
                            One Meal One Hope was created to bridge that gap.
                            To connect communities, restaurants, volunteers,
                            and compassionate individuals together through one mission:
                            making sure no meal goes to waste while someone sleeps hungry.
                        </p>

                        <div className="mt-10 bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                            <p className="text-2xl md:text-3xl font-bold text-green-400 leading-relaxed">
                                “This is not charity — this is humanity.”
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-8">

                        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
                            <h2 className="text-3xl font-bold mb-6 text-green-400">
                                Our Mission
                            </h2>

                            <p className="text-gray-300 leading-8">
                                Our mission is to create a sustainable hunger relief ecosystem
                                where communities actively participate in reducing food waste
                                and supporting vulnerable people with dignity and respect.
                            </p>

                            <ul className="mt-8 space-y-4 text-gray-300">
                                <li>✔ Feed people with dignity</li>
                                <li>✔ Reduce food wastage</li>
                                <li>✔ Empower local communities</li>
                                <li>✔ Build sustainable food systems</li>
                                <li>✔ Encourage volunteer participation</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
                            <h2 className="text-3xl font-bold mb-6 text-green-400">
                                Our Vision
                            </h2>

                            <p className="text-gray-300 leading-8">
                                We envision a future where surplus food reaches hungry people
                                efficiently through technology, local collaboration,
                                and transparent systems.
                            </p>

                            <p className="text-gray-300 leading-8 mt-6">
                                By building volunteer-driven food rescue networks,
                                we aim to transform compassion into real-world impact.
                            </p>

                            <div className="mt-8 p-6 rounded-2xl bg-black border border-zinc-700">
                                <p className="text-gray-400 italic leading-8">
                                    “A single meal may not solve hunger forever,
                                    but it can restore hope for one more night.”
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Our Approach */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        Our Approach
                    </h2>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition-all duration-300">
                            <div className="text-5xl mb-5">🍱</div>

                            <h3 className="text-2xl font-semibold mb-4">
                                Food Distribution
                            </h3>

                            <p className="text-gray-400 leading-7">
                                Building local food rescue and distribution networks
                                to deliver meals efficiently where they are needed most.
                            </p>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition-all duration-300">
                            <div className="text-5xl mb-5">🤝</div>

                            <h3 className="text-2xl font-semibold mb-4">
                                Volunteer Driven
                            </h3>

                            <p className="text-gray-400 leading-7">
                                Empowering passionate volunteers to become the backbone
                                of compassionate community action.
                            </p>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition-all duration-300">
                            <div className="text-5xl mb-5">📊</div>

                            <h3 className="text-2xl font-semibold mb-4">
                                Transparency
                            </h3>

                            <p className="text-gray-400 leading-7">
                                Maintaining transparent donation tracking and accountability
                                for every contribution received.
                            </p>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition-all duration-300">
                            <div className="text-5xl mb-5">🌱</div>

                            <h3 className="text-2xl font-semibold mb-4">
                                Sustainability
                            </h3>

                            <p className="text-gray-400 leading-7">
                                Supporting eco-friendly sourcing systems that reduce waste
                                while strengthening communities.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Impact Section */}
                <section className="mb-20">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-12">
                        <h2 className="text-4xl font-bold mb-10 text-center">
                            The Impact We Want To Create
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 text-center">

                            <div>
                                <h3 className="text-5xl font-bold text-green-400 mb-4">
                                    1M+
                                </h3>

                                <p className="text-gray-300 leading-7">
                                    Meals distributed through community-powered food rescue systems.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-bold text-green-400 mb-4">
                                    500+
                                </h3>

                                <p className="text-gray-300 leading-7">
                                    Volunteers united with one purpose — ending hunger together.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-bold text-green-400 mb-4">
                                    100%
                                </h3>

                                <p className="text-gray-300 leading-7">
                                    Commitment to transparency, dignity, and meaningful impact.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Support CTA */}
                <section>
                    <div className="bg-white text-black rounded-3xl p-12 text-center shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Join The Movement
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-700">
                            Hunger is not someone else’s problem.
                            Together, we can transform excess into survival,
                            compassion into action, and hope into reality.
                        </p>

                        <div className="flex flex-wrap justify-center gap-5 mt-10">

                            <Link href="/donate">
                                <button className="bg-black hover:bg-zinc-800 text-white transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
                                    Support Our Mission
                                </button>
                            </Link>

                            <Link href="/contact">
                                <button className="border border-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
                                    Partner With Us
                                </button>
                            </Link>

                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}