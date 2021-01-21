/**
 * Prototypes
 */

// Returns a capitalized string
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Returns all words capitalized
String.prototype.capitalizeAllWords = function () {
    return this.replace(/\b\w/g, s => s.toUpperCase());
}

// Returns short ISO String
Date.prototype.toShortISOString = function () {
    return this.toISOString().split('T')[0];
};

// Creates a Short Date String that matches Salesforce req 
Date.prototype.toSFDateString = function (separator = '-') {
    const day = this.getDate().toString().padStart(2, '0');
    const month = (this.getMonth() + 1).toString().padStart(2, '0');
    return day + separator + month + separator + this.getFullYear();
}

// String to Camel case syntax
String.prototype.toCamelCase = function () {
    return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};
