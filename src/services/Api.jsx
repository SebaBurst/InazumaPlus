import db from '../../db/db_inazuma.json'

//get series from id

export const getSeries = (id) => {
    const series = db['__collections__']['Series'];
    const serie = series[id];
    return serie;
}


//get list of episodes from id

export const getEpisodesList = (id) => {
    const series = db['__collections__']['Series'];
    const ares = series[id];
    const ares23 = ares['__collections__']['episodes'];
    const episodeIds = Object.keys(ares23);
    const episodesArray = episodeIds.map(episodeId => {
        const episode = ares23[episodeId];
        episode.id = episodeId;
        return episode;
    });
    return episodesArray;
}


//get episode from id
export const getEpisode = (id, episodeId) => {
    const series = db['__collections__']['Series'];
    const serie = series[id];
    const episode = serie['__collections__']['episodes'][episodeId];
    return episode;
}

