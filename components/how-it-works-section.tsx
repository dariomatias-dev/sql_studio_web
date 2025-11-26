import Image from "next/image";

export const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 md:px-8 bg-subtle-pattern-alt mx-auto my-12 max-w-7xl"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left space-y-10">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-xl font-extrabold shadow-md">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Download the App
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get SQL Studio from Google Play and install it on your Android
                  device.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-xl font-extrabold shadow-md">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Create or Use a Database
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Start by creating a new SQLite database, or pick one of our
                  pre-loaded practice databases.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-xl font-extrabold shadow-md">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Start Querying and Managing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Open the SQL editor, write your queries, execute them, and
                  manage your database objects on the go.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
            <Image
              src="/screenshots/screenshot_1.jpg"
              alt="How it works app flow"
              width={350}
              height={550}
              className="rounded-3xl shadow-2xl border-4 border-white object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
