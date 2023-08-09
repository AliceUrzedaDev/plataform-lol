'use client'

import { IChampion } from "@/interface/champions.interface";
import buildImageChampion from "@/utils/buildImageChampion";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const statuses: any = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};
const champions: IChampion[] = [
{
    version: "6.24.1",
    id: "Aatrox",
    key: "266",
    name: "Aatrox",
    title: "A Lâmina Darkin",
    blurb:
      "Aatrox é um guerreiro lendário, um dos apenas cinco que restam de uma raça antiga conhecida como Darkin. Ele empunha sua enorme lâmina com graça e equilíbrio, cortanto legiões em um estilo hipnótico de se ver. Com cada inimigo derrubado, o ataque de Aatrox...",
       
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4,
    },

    image: {
        full: "Aatrox.png",
        sprite: "champion0.png", 
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48,
    },

    tags: [
        "Lutador", "Tank",
    ],
   
    partype: "BloodWell", 
    
    stats: {
        hp: "537.8",
        hpperlevel: "85.0",
        mp: "105.6",
        mpperlevel: "45.0",
        movespeed: "345.0",
        armor: "24.384",
        armorperlevel: "3.8",
        spellblock: "32.1",
        spellblockperlevel: "1.25",
        attackrange: "150.0",
        hpregen: "6.59",
        hpregenperlevel: "0.5",
        mpregen: "0.0",
        mpregenperlevel: "0.0",
        crit: "0.0",
        critperlevel: "0.0",
        attackdamage: "60.376",
        attackdamageperlevel: "3.2",
        attackspeedoffset: "-0.04",
        attackspeedperlevel: "3.0",
    }
},

{
    version: "6.24.1",
    id: "Ahri",
    key: "103",
    name: "Ahri",
    title: "A Raposa de Nove Caudas",
    blurb: "Ao contrário de outras raposas que percorriam as florestas do sul de Ionia, Ahri sempre sentiu uma estranha conexão com o mundo mágico ao seu redor; uma conexão que estava de alguma forma incompleta. No fundo, ela sentiu que a pele em que havia nascido era inadequada para...",
    
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5,
    },
    
    image: {
        full: "Ahri.png",
        sprite: "champion0.png", 
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48,
    },
   
    tags: [
        "Mago", "Assasino",
    ],
      
    partype: "MP", 
    
    stats: {
        hp: "514.4",
        hpperlevel: "80.0",
        mp: "334.0",
        mpperlevel: "50.0",
        movespeed: "330.0",
        armor: "20.88",
        armorperlevel: "3.5",
        spellblock: "30.0",
        spellblockperlevel: "0.0",
        attackrange: "550.0",
        hpregen: "6.505",
        hpregenperlevel: "0.6",
        mpregen: "6.0",
        mpregenperlevel: "0.8",
        crit: "0.0",
        critperlevel: "0.0",
        attackdamage: "53.04",
        attackdamageperlevel: "3.0",
        attackspeedoffset: "-0.065",
        attackspeedperlevel: "2.0",
    }
},

{
    version: "6.24.1",
    id: "Alistar",
    key: "12",
    name: "Alistar",
    title: "O Minotauro",
    blurb: "Como o guerreiro mais poderoso que já surgiu das tribos Minotauros da Grande Barreira, Alistar defendeu sua tribo dos muitos perigos de Valoran; isto é, até a chegada do exército noxiano. Alistar foi atraído de sua aldeia pelas maquinações de ...",
    
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7,
    },
    
    image: {
        full: "Alistar.png",
        sprite: "champion0.png", 
        group: "champion",
        x: 144,
        y: 0,
        w: 48,
        h: 48,
    },
   
    tags: [
       "Tank", "Suporte",
    ],

    partype: "MP", 
    
    stats: {
        hp: "613.36",
        hpperlevel: "106.0",
        mp: "278.84",
        mpperlevel: "38.0",
        movespeed: "330.0",
        armor: "24.38",
        armorperlevel: "3.5",
        spellblock: "32.1",
        spellblockperlevel: "1.25",
        attackrange: "125.0",
        hpregen: "8.675",
        hpregenperlevel: "0.85",
        mpregen: "8.5",
        mpregenperlevel: "0.8",
        crit: "0.0",
        critperlevel: "0.0",
        attackdamage: "61.1116",
        attackdamageperlevel: "3.62",
        attackspeedoffset: "0.0",
        attackspeedperlevel: "2.125",
    }
},

{
    version: "6.24.1",
    id: "Amumu",
    key: "32",
    name: "Amumu",
    title: "A Múmia Triste",
    blurb: "A solidão pode ser mais solitária do que a morte.Uma alma solitária e melancólica da antiga Shurima, Amumu percorre o mundo em busca de um amigo. Amaldiçoado por um antigo feitiço, ele está condenado a permanecer sozinho para sempre , como seu toque é a morte e seu carinho...",
    
    info: {
      attack: 2,
      defense: 6,
      magic: 8,
      difficulty: 3,
    },
    
    image: {
        full: "Amumu.png",
        sprite: "champion0.png", 
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48,
    },
   
    tags: [
        "Tank", "Mago",
    ],

    partype: "MP", 
    
    stats: {
        hp: "587.8",
        hpperlevel: "85.0",
        mp: "200.0",
        mpperlevel: "0.0",
        movespeed: "350.0",
        armor: "26.38",
        armorperlevel: "3.5",
        spellblock: "32.1",
        spellblockperlevel: "1.25",
        attackrange: "125.0",
        hpregen: "8.34",
        hpregenperlevel: "0.65",
        mpregen: "50.0",
        mpregenperlevel: "0.0",
        crit: "0.0",
        critperlevel: "0.0",
        attackdamage: "58.376",
        attackdamageperlevel: "3.2",
        attackspeedoffset: "-0.1",
        attackspeedperlevel: "3.1",
    }
},

{
  version: "6.24.1",
  id: "Akali",
  key: "84",
  name: "Akali",
  title: "O Punho da Sombra",
  blurb: "Existe uma antiga ordem originária das Ilhas Jônicas dedicada à preservação do equilíbrio. Ordem, caos, luz, escuridão - todas as coisas devem existir em perfeita harmonia, pois assim é o universo. Esta ordem é conhecida como Kinkou...",
  
  info: {
    attack: 5,
    defense: 3,
    magic: 8,
    difficulty: 7,
  },
  
  image: {
      full: "Akali.png",
      sprite: "champion0.png", 
      group: "champion",
      x: 96,
      y: 0,
      w: 48,
      h: 48,
  },
 
  tags: [
      "Assassino", 
  ],

  partype: "Energy", 
  
  stats: {
      hp: "587.8",
      hpperlevel: "85.0",
      mp: "200.0",
      mpperlevel: "0.0",
      movespeed: "350.0",
      armor: "26.38",
      armorperlevel: "3.5",
      spellblock: "32.1",
      spellblockperlevel: "1.25",
      attackrange: "125.0",
      hpregen: "8.34",
      hpregenperlevel: "0.65",
      mpregen: "50.0",
      mpregenperlevel: "0.0",
      crit: "0.0",
      critperlevel: "0.0",
      attackdamage: "58.376",
      attackdamageperlevel: "3.2",
      attackspeedoffset: "-0.1",
      attackspeedperlevel: "3.1",
  }
},

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TableComponent() {
  return (
    <div className="bg-gray-900 py-10">
      <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
        Listas de Campeões Gratuitos
      </h2>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-lg leading-6 text-white">
          <tr>
            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8" >
              Nome
            </th>
            <th scope="col"  className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell" >
              Título
            </th>
            <th scope="col"  className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell" >
              Classes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {champions.map((champion) => (
            <tr key={champion.id}>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                <img src={buildImageChampion(champion.key)} alt="" className="h-8 w-8 rounded-full bg-gray-800" />
                <div className="truncate text-sm font-medium leading-6 text-white">{champion.name}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex items-center">
                  <div className="truncate text-sm font-medium leading-6 text-white">{champion.title}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex items-center">
                  <div className="truncate text-sm font-medium leading-6 text-white">
                    {champion.tags.map((tag) => (
                      <div key={uuidv4()} className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10 text-center mb-2">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
