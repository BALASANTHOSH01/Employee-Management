
// Function to convert Base64 string to Buffer
function base64ToBuffer(base64String) {
    return Buffer.from(base64String, 'base64');
}

module.exports = { base64ToBuffer };

