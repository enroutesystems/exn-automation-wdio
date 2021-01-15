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
    return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
}
