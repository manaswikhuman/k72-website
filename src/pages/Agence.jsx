import List from "../components/agence/List";
import Hero from "../components/agence/Hero";

const Agence = () => {

  const EList=[
    {
      position: "Directeur principal",
      name: "Carl godbout"
    },
    {
      position: "Conceptrice-rédactrice",
      name: "Camille Brière"
    },
    {
      position: "Conseillère principale",
      name: "Stéphanie Brunelle"
    },
    {
      position: "VPP et directeur général",
      name: "Pierre-Luc Paiement"
    },
    {
      position: "Directrice artistique",
      name: "Mélanie Laviolette"
    },
    {
      position: "Directrice de la stratégie",
      name: "Michèle Riendeau"
    },
    {
      position: "Directrice conseil",
      name: "Meggie Lavoie"
    },
    {
      position: "Directeur artistique",
      name: "Alex Sauvageau"
    },
    {
      position: "Conseiller",
      name: "Philippe Perreault"
    },
    {
      position: "Stratège",
      name: "Béatrice Roussin"
    },
    {
      position: "Conseiller",
      name: "Lou Gravel-Jean"
    },
       {
      position: "Stratège",
      name: "Hélène Contant"
    },
     {
      position: "Directeur artistique",
      name: "Alex Sauvageau"
    },
       {
      position: "Conseiller",
      name: "Philippe Perreault"
    },
       {
      position: "Stratège",
      name: "Béatrice Roussin"
    },
     {
      position: "Conseiller",
      name: "Lou Gravel-Jean"
    },
       {
      position: "Stratège",
      name: "Hélène Contant"
    },
  ];


  return (
    <div className="parent">
      <Hero />      
      <div>
          {EList.map(function (elem, idx) {
            return (
              <div key={idx} className="bg-black">
                <List position={elem.position} name={elem.name} /> 
              </div>
            );
          })}
        </div>
        <div className=" bg-black text-white">
          <div className=" flex justify-between items-center px-10 py-5">
            <div className="flex flex-row gap-3 items-center justify-center py-10 uppercase font-[font2] text-sm ">
              <p className=" hover:text-[#D3FD50] transition duration-500 ease-in-out">
                Politique de confidentialité
              </p>
              <p className=" hover:text-[#D3FD50] transition duration-500 ease-in-out">
                Avis de confidentialité
              </p>
              <p className=" hover:text-[#D3FD50] transition duration-500 ease-in-out">
                Rapport éthique
              </p>
              <p className=" hover:text-[#D3FD50] transition duration-500 ease-in-out">
                options de consentement
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center py-10 uppercase font-[font2] text-4xl">
              <h1 className="border-2 rounded-4xl px-4  hover:text-[#D3FD50] transition duration-500 ease-in-out">
                FB
              </h1>
              <h1 className="border-2 rounded-full px-4 hover:text-[#D3FD50] transition duration-500 ease-in-out">
                IG
              </h1>
              <h1 className="border-2 rounded-full px-4 hover:text-[#D3FD50] transition duration-500 ease-in-out">
                IN
              </h1>
              <h1 className="border-2 rounded-full px-4 hover:text-[#D3FD50] transition duration-500 ease-in-out">
                BE
              </h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Agence;





