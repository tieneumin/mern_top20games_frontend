import React from "react";

function GamesTable(props) {
  const { games, isLoading, isError } = props;
  /* INSTRUCTION: Show "loading..." when isLoading is true */
  if (isLoading) return <span>Loading...</span>;

  /* INSTRUCTION: Show "error" when isError is true */
  if (isError) return <span>Error</span>;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genres</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {/* INSTRUCTION: if games data is available, display the games in a table. if not, display a "No games found." message */}
        {games.length > 0 ? (
          games.map((g) => {
            return (
              <tr key={g.title}>
                <td>{g.title}</td>
                <td>{g.genres.join(", ")}</td>
                <td>{g.rating}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="3">No games found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default GamesTable;
