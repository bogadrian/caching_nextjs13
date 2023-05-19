const getData = async () => {
  const response = await fetch('http://localhost:3000/api/source', {
    cache: 'no-store'
  });
  const data = await response.json();

  return data;
};

export const Comp1SS = () => {
  const data = getData();
  return (
    <div
      style={{
        width: '89%',
        height: '200px',
        border: '2px solid #f8eaea',
        marginTop: '100px'
      }}
    >
      Server Component 1<h1>{data}</h1>
    </div>
  );
};
