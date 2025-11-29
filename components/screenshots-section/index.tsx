import { ScreenshotsCarousel } from "./screenshots-carousel";

export const ScreenshotsSection = () => {
  return (
    <section
      id="screenshots"
      className="py-20 px-4 md:px-8 bg-subtle-pattern mx-auto my-12 max-w-7xl"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          See SQL Studio in Action
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          A powerful and intuitive interface, designed to maximize your
          productivity. Explore the screenshots below!
        </p>

        <ScreenshotsCarousel />
      </div>
    </section>
  );
};
