/**
 * Prototypes
 */

// Returns a capitalized string
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Returns short ISO String
Date.prototype.toShortISOString = function () {
    return this.toISOString().split('T')[0];
};

Date.prototype.toExnDateString = function () {
    const day = this.getDate().toString().padStart(2, '0');
    const month = (this.getMonth() + 1).toString().padStart(2, '0');
    return `${day}-${month}-${this.getFullYear()}`;
}

String.prototype.toCamelCase = function () {
    return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};
