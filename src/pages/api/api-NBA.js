import axios from "axios";

// https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams

const apiNBA = axios.create({
    baseURL:'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams'
})

export default apiNBA;