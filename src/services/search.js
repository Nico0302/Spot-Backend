const { Client } = require('@elastic/elasticsearch');

function getElasticClient() {
    const url = process.env.ELASTICS_URL || (process.env.NODE_ENV === 'production') ? 'http://localhost:9200' : 'http://es01:9200';
    return new Client({ node: url });
}

const client = getElasticClient();

async function searchSchools(query) {
    const { body } = await client.search({
        index: 'spot-school',
        size: 10,
        error_trace: process.env.NODE_ENV === 'development',
        body: {
            query: {
                multi_match: {
                    query,
                    fields: ['name', 'city', 'acronym']
                }
            }
        }
    });

    return body.hits.hits.map(hit => hit._source);
}

module.exports = {
    searchSchools,
    getElasticClient
};