const Card = ({ entry }) => {
  const { name, src, details } = entry;
  return (
    <div className="m-4 bg-[#C2E8CE] hover:scale-110  grid place-items-center p-8">
      <h1 className="text-3xl mb-4 ">{name}</h1>
      <img className="w-[400px] h-[300px] " src={src} alt="image of cloud" />
      <p className="h-[120px] sm:h-[220px] md:h-[150px] lg:h-[120px] mt-8">
        {details}
      </p>
    </div>
  );
};

export default Card;
