export function Results({tip, totalPerPerson}) {
  return (
    <>
      <h2>Tip: ${tip > 0 ? tip : "0.00"}</h2>
      <h2>Total Per Person: ${totalPerPerson > 0 ? totalPerPerson : "0.00"}</h2>
    </>
  );
}
