import crypto from 'crypto';

const authTokens={};

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const generateAuthToken = () => {
    return crypto.pseudoRandomBytes(30).toString('hex');
}

export default {
    authTokens,
    getHashedPassword,
    generateAuthToken
}