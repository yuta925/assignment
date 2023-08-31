import Tabs from "../Molecules/Tabs";

type SiteName = {
    name: string;
};

const Header: React.FC<SiteName> = ( {name} ) => {
  return (
    <div className="header bg-black h-20">         
      <h1 className="text-white text-2xl ml-2">{name}</h1>
      <Tabs />
    </div>    
    )
}

export default Header