// Generates an ID of 6 digits
const generateId = () => {
    const date = new Date();
    return date.toShortISOString()
        .replace(/-/g, '') + Math.random()
        .toString(16).substr(2,6)
        .toUpperCase();
}

module.exports = {
    generateId
}