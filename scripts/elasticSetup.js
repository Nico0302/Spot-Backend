const { Client } = require('@elastic/elasticsearch');
const fs = require('fs');

const client = new Client({ node: 'http://localhost:9200' });

function importSchools() {
    fs.readFile(process.env.SCHOOLS_FILE_PATH ||'./schools.json', 'utf8', async (error, data) => {
        if (error) {
            throw error;
        }

        const schools = JSON.parse(data);

        for (let i = 0; i < schools.length; i++) {
            const { id, ...body } = schools[i];

            await client.index({
                index: 'spot-school',
                id,
                body
            });
        }

        await client.indices.refresh({ index: 'spot-school' });
    });
}

importSchools();