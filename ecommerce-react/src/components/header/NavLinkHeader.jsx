const NavLinkHeader = ({ name }) => {
  return (
    <a href="#" className="group relative py-2">
      <span className="group-hover:text-orange-primary">{name}</span>
      <span className="absolute bottom-0 block h-[3px] w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-orange-primary "></span>
    </a>
  );
};

export default NavLinkHeader;
