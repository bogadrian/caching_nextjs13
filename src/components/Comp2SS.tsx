const getData = async () => {
  const response = await fetch('http://localhost:3000/api/source');
  const data = await response.json();

  return data;
};

export const Comp2SS = async () => {
  const data = await getData();

  return (
    <div
      style={{
        width: '89%',
        height: '200px',
        border: '2px solid #f8eaea',
        marginTop: '50px'
      }}
    >
      Server Component 2<h1>{data}</h1>
    </div>
  );
};
