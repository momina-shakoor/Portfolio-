function Contact() {
  return (
    <main className="min-h-screen bg-amber-50 px-4 py-12 text-stone-900 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <section className="grid gap-10 rounded-2xl border border-amber-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something
            </h1>

            <p className="mt-4 leading-7 text-stone-600">
              Tell me about your project. I reply within one working day.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:mominashakoorf@gmail.com"
                className="text-amber-800 underline-offset-4 hover:underline"
              >
                mominashakoorf@gmail.com
              </a>

              <a
                href="https://github.com/momina-shakoor"
                target="_blank"
                rel="noreferrer"
                className="text-amber-800 underline-offset-4 hover:underline"
              >
                github.com/momina-shakoor
              </a>

              <a
                href="https://www.linkedin.com/in/momina-shakoor-09039b269/"
                target="_blank"
                rel="noreferrer"
                className="text-amber-800 underline-offset-4 hover:underline"
              >
                linkedin.com/momina
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mjygrogz"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label
                htmlFor="details"
                className="mb-1 block text-sm font-medium text-stone-700"
              >
                Project details
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                placeholder="Tell me about your project"
                required
                className="w-full resize-y rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-amber-700 px-5 py-3 font-semibold text-white transition hover:bg-amber-800 sm:w-auto"
            >
              Send message
            </button>
          </form>
        </section>

        <footer className="py-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Momina Shakoor. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

export default Contact;
