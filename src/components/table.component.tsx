'use client'

import { IChampion } from "@/interface/champions.interface";
import buildImageChampion from "@/utils/buildImageChampion";
import { v4 as uuidv4 } from 'uuid';
import translate from "translate";
import { useEffect, useState } from "react";
import { getAllChampions, getFreeChampionsWeek } from "@/services/champions.service";

const freeChampionsIds: number[] = [3,10,18,23,28,34,35,45,57,60,68,79,99,104,127,147,166,201,202,234,236,266,267,360,429,497,555,875,887]

export default function TableComponent() {
  const [champions, setChampions] = useState<any[]>([])

  useEffect(() => {
    getFreeChampionsWeek().then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log('Erro getFreeChampions', error);
    })
    getAllChampions().then((response) => {
      const formatResponse = response.data.data;
      const allChampionsArray = Object.values(formatResponse)
      let championsFree: any[] = [];
      allChampionsArray?.forEach((champion: any) => {
        freeChampionsIds.forEach((freeChampionId: any) => {
          if (freeChampionId == champion.key){
            championsFree.push(champion)
          }
        })
      })
      setChampions(championsFree)
  }).catch((error) => {
      console.log("Ocorreu um erro: ", error);
  })

    const translateTitles = async () => {
      const translatedChampions = await Promise.all(
        champions.map(async (champion) => {
          const translatedTags = await Promise.all(
            champion.tags.map(async (tag: any) => await translate(tag, "pt"))
          );
          
          return {
            ...champion,
            title: await translate(champion.title, "pt"),
            tags: translatedTags
          };
        })
      );
      
      setChampions(translatedChampions);
    };

    translateTitles();
  }, []);
  
  return (
    <div className="bg-gray-900 py-10 m-10 rounded-md">
      <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8 text-lg">
      <span className= "h-14 bg-gradient-to-r from-orange-400 to-orange-700 rounded-md p-2">
        Listas de Campeões Gratuitos
      </span>
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
                    {champion.tags.map((tag: any) => (
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
