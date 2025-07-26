const store = {
    books: {
        fiction: {},
    },
    music: {
        rock: {
            topHit: "Stairway to Heaven",
        },
        pop: {},
        jazz: {},
    },
    movies: {
        action: {},
        comedy: {},
        drama: {},
    },
};

// Logical OR Assignment Operator
store.books.fiction?.bestSeller ||= "The Great Gatsby";

// Logical AND Assignment Operator
store.music.rock?.topHit &&= "Bohemian Rhapsody";

// Nullish Coalescing Assignment Operator
store.movies.action?.topRated ??= "Inception";

// Numeric Separators
const billion = 1_000_000_000