import React from "react";

const MovieForm = ({ match, history }) => { 
  return (
    <div>
      <h1>MovieForm {match.params.id}</h1>
      <button
        className='btn btn-primary'
        onClick={() => history.push("/movies")}>
        {" "}
        {/* history is the props which has a property 'push' which redirects the page to movies when the save button is clicked */}
        Save
      </button>
    </div>
  );
};

export default MovieForm;
