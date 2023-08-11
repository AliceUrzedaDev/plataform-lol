import axios from "axios";

export async function getAllChampions() {
    const url = "http://ddragon.leagueoflegends.com/cdn/13.15.1/data/pt_BR/champion.json";
    return axios.get(url);
}

export async function getFreeChampionsWeek() {
    try {
        const apiKey = process.env.API_KEY;
        console.log(apiKey);
        
        const url = "https://br1.api.riotgames.com/lol/platform/v3/champion-rotations";
        return axios({
            method: 'post',
            url,
            headers: { 
                "X-Riot-Token": "RGAPI-d802082e-80a9-43d2-a644-cf2918f436f3",
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": "true"
            },
            data: { }   
        })  
    } catch (error) {
        console.log("Ocorreu um erro na requisição: ", error);
        throw error;
    }
}
