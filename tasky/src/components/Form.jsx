import React from "react";

const AddMovieForm = (props) => {

  return (
    <div>
    <form onSubmit={props.submit}>
      <label>
        Movie title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Movie release date:
        <input type="date" name="release_date" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Synopsis:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
    </label>
    <label>
        Original Language:
        <input type="text" name="language" onChange={(event) => props.change(event)} />
    </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddMovieForm;
