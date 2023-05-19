import { HomePageCard } from '../../components/HomePageCard';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/source');
  const data = await response.json();

  return data;
};

export default function Dashboard() {
  const data = getData();
  return (
    <div
      style={{
        width: '1300px',
        height: '80vh',
        border: '3px solid #dfbfbf'
      }}
    >
      <h1>{data}</h1>
      <h1 style={{ textAlign: 'center' }}>
        <HomePageCard />
      </h1>
    </div>
  );
}
