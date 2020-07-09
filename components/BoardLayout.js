import { Card } from "~/components/Card";

export default function BoardLayout({
  players,
  currentPlayerId,
  renderPlayer,
  drawPile,
  discardPile,
  playerOptions,
  yellOneMessage,
}) {
  const currentPlayer = players.find((player) => player.id == currentPlayerId);
  const indexCurrentPlayer = players.indexOf(currentPlayer);

  return (
    <div
      className="grid-cols-3"
      style={{
        display: "grid",
        alignContent: "center",
        gridTemplateRows: "auto auto 1fr auto",
        width: "100%",
      }}
    >
      {players.map((player, index) => {
        const isCurrentPlayer = player.id === currentPlayerId;
        let positionPlayer;
        players.length == 2
          ? (positionPlayer = {
              0: {
                grid: "row-start-4 col-start-1 col-span-3",
              },
              1: {
                grid: "row-start-1 col-start-2 col-span-1",
              },
            })
          : (positionPlayer = {
              0: {
                grid: "row-start-4 col-start-1 col-span-3",
              },
              1: {
                grid: "row-start-2 col-start-1 col-span-1",
              },
              2: {
                grid: "row-start-1 col-start-2 col-span-1",
              },
              3: {
                grid: "row-start-2 col-start-3 col-span-1",
              },
            });
        const posPlayer =
          (players.length - indexCurrentPlayer + index) % players.length;

        return (
          <div
            key={player.id}
            className={`${positionPlayer[posPlayer].grid} flex flex-col items-center `}
          >
            {renderPlayer(player, isCurrentPlayer)}
          </div>
        );
      })}
      <div
        className={`row-start-3 col-span-3 md:row-start-2 md:col-start-2 md:col-span-1 lg:px-20 py-4 flex flex-col justify-center items-center`}
      >
        <div className="flex flex-no-wrap">
          {drawPile}
          {discardPile}
        </div>

        <div className="m-1 md:m-4 w-full sm:w-1/2 flex justify-center flex-col">
          {playerOptions}
        </div>
      </div>
      <div className="row-start-1 col-start-1 col-span-3 flex flex-col items-center justify-center">
        {yellOneMessage}
      </div>
    </div>
  );
}
