function Child(props) {
  return (
    <>
      <div>Child</div>
      <button onClick={props.onclick}>Change Parent Value</button>
    </>
  );
}

export default Child;