//import { Corpus, Similarity } from "tiny-tfidf"
//import { charity_names, charity_missions } from "./testfile.js"

// Replace these with db values
// const names = charity_names
// const keywords = charity_missions

// const corpus = new Corpus(names, keywords)
// const similarty = new Similarity(corpus)
// const sim = similarty.getDistanceMatrix().matrix

// Returns [[index, score]] sorted by highest score
function getTopCharities(index, cos_sim, top = 5) {
    
    const similarity_scores = cos_sim.map(
        (score, i) => [i, score[index]]
    )

    return similarity_scores.sort((a, b) => b[1] - a[1]).slice(0, top)
}

//export function getRecommendations(charities_donated, charities_all) {
     function getRecommendations(charities_donated, charities_all) {
    var names = []
    var keywords = []
    charities_all.map((res) => {
        names.push(res.charityName)
        keywords.push(res.charityDescription)
    })
    const corpus = new Corpus(names, keywords)
    const similarty = new Similarity(corpus)
    const sim = similarty.getDistanceMatrix().matrix

    const recommendations = charities_donated.map(
        (res) => {
            const index = corpus.getDocumentIdentifiers().findIndex((element) => element === res.charity)
            return getTopCharities(index, sim).map(
                (scores) => scores[0]
            )
        }
    )
    const flattenedRecs = recommendations.flat()
    const filteredRecs = flattenedRecs.filter((item, i) => flattenedRecs.indexOf(item) === i)
    return filteredRecs.map(
        (index) => corpus.getDocumentIdentifiers()[index]
    )
}

// testing
//const charities = charity_names.map((res) => JSON.parse(JSON.stringify({charity: res})))
//const allCharities = charity_names.map((res, i) => JSON.parse(JSON.stringify({ charityName: charity_names[i], charityDescription: charity_missions[i] })))
//console.log(charities)
//console.log(getRecommendations(charities, allCharities))