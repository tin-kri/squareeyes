export const getMovieIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
};

export const groupByGenre = (movies) => {
    return movies.reduce((grouped, movie) => {
        const genre = movie.genre;
        if (!grouped[genre]) grouped[genre] = [];
        grouped[genre].push(movie);
        return grouped;
    }, {});
};

export const getDisplayPrice = (movie) => 
    movie.onSale ? movie.discountedPrice : movie.price;

export const formatPrice = (price) => `$${price.toFixed(2)}`;

export const getMovieInfo = (movie) => ({
    rating: `Rating: ★ ${movie.rating}`,
    price: `Price: ${formatPrice(movie.price)}`,
    onSale: `On Sale: ${movie.onSale ? 'Yes' : 'No'}`,
    discountPrice: movie.onSale && movie.discountedPrice < movie.price 
        ? `Discount Price: ${formatPrice(movie.discountedPrice)}`
        : 'Discount Price: N/A'
});

export const getRandomMovies = (movies, count = 3) => {
    if (!movies || movies.length === 0) return [];
    if (movies.length <= count) return movies;
  
    const result = [];
    const availableMovies = [...movies];
  
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * availableMovies.length);
      result.push(availableMovies[randomIndex]);
      availableMovies.splice(randomIndex, 1); 
    }
    return result;
  };