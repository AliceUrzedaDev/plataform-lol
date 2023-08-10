import axios from "axios";

export async function championsService() {
    const url = "http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json";
    return axios.get(url);
}
