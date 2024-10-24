export const getMedalsByAthlete = (data, athleteName) => {
    const athleteData = data.filter(row => row.Athlete === athleteName);
    return { totalMedals: athleteData.length, athleteData };
};

export const getMedalsByCountry = (data, countryCode) => {
    const countryData = data.filter(row => row.Country === countryCode);

    const medalCounts = countryData.reduce((acc, row) => {
        if (row.Medal === 'Gold') acc.gold += 1;
        else if (row.Medal === 'Silver') acc.silver += 1;
        else if (row.Medal === 'Bronze') acc.bronze += 1;
        return acc;
    }, { gold: 0, silver: 0, bronze: 0 });

    return {
        totalMedals: countryData.length,
        gold: medalCounts.gold,
        silver: medalCounts.silver,
        bronze: medalCounts.bronze,
        countryData,
    };
};

export const findMinMaxMedals = (data, medalType) => {
    const medalCounts = data.reduce((acc, row) => {
        if (row.Medal === medalType) {
            acc[row.Country] = (acc[row.Country] || 0) + 1;
        }
        return acc;
    }, {});

    const medalValues = Object.values(medalCounts);

    if (medalValues.length === 0) {
        return { min: 0, max: 0 }; // Return 0 if no medals of the specified type
    }

    const minMedals = Math.min(...medalValues);
    const maxMedals = Math.max(...medalValues);

    return { min: minMedals, max: maxMedals };
};
export const getCountryMedalsOverTime = (data, countryCode) => {
    const countryData = data.filter(row => row.Country === countryCode);
    const medalsByYear = countryData.reduce((acc, row) => {
        acc[row.Year] = (acc[row.Year] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(medalsByYear).map(([year, medals]) => ({ year, medals }));
};
