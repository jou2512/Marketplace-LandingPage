function filterCollection(collection, predicate) {
    if (Array.isArray(collection)) {
        return collection.filter(predicate);
    } else if (typeof collection === 'object' && collection !== null) {
        return Object.fromEntries(
            Object.entries(collection).filter(([key, value]) => predicate(value, key))
        );
    } else {
        throw new Error('The collection must be an array or an object');
    }
}