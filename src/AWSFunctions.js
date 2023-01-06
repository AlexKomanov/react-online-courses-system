import * as AWS from 'aws-sdk'

const configuration = {
    region: process.env.REACT_APP_region,
    secretAccessKey: process.env.REACT_APP_secretAccessKey,
    accessKeyId: process.env.REACT_APP_accessKeyId

}

AWS.config.update(configuration);

/**
* Initializing AWS DynamoDB Client
*/

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = async () => {
    let params = {
        TableName: 'courses'
    }

    let data = await docClient.scan(params).promise();
    const items = data.Items.map((item) => { return item })
    console.log('items', items)
    return items;

}
