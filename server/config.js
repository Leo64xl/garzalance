
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..','.env') });

export default{
    BucketName: process.env.BUCKET_NAME || '',
    Endpoint: process.env.ENDPOINT || ''
}



