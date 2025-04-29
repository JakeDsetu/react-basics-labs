export const getMovies = async () => {
    const  res = await fetch(
        `http://localhost:8080/api/movies`
    )
        return res.json();
};

export const addMovie = async(data) => {
    const res = await fetch(
        `http://localhost:8080/api/movies`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};

export const deleteMovie = async (id) => {
    const res =  fetch(
        `http://localhost:8080/api/movies/${id}`,
        {
            method: 'DELETE'
        }
    )
    return res;
};

export const updateMovie = async (data) => {
    const res = await fetch(
        `http://localhost:8080/api/movies/${data._id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};
