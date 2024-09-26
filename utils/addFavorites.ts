const addFavorite = async (movieId: string) => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch('http://localhost:3001/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ movieId }),
      });
  
      if (response.ok) {
        alert('Movie added to favorites!');
      } else {
        alert('Failed to add favorite');
      }
    } catch (error) {
      console.error('Error adding favorite movie:', error);
    }
  };
export default addFavorite;  