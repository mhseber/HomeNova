import cf from "../../../public/assets/cf-bg.webp";

const cFurniturePage = () => {
  return (
    <div>
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: `url(${cf.src})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">CLASSIC FURNITURE</h1>
            <p className="mb-5">
              Bedrooms, Dining rooms, Living rooms, Bathroom furniture,
              Kitchens, Offices, Furniture for Kids, Auxiliary and Outdoor
              furniture for any budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cFurniturePage;
