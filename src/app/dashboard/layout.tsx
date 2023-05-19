import Link from 'next/link.js';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/source');
  const data = await response.json();

  return data;
};

export default function FashboardLayuot({
  children
}: {
  children: React.ReactNode;
}) {
  const data = getData();
  return (
    <div
      style={{
        width: '100%',
        height: '85%',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <div
        style={{
          height: '100vh',
          width: '20vw',
          backgroundColor: '#383b39',
          textAlign: 'center',
          fontSize: '30px'
        }}
      >
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ marginBottom: '50px' }}>Dashboard layout</h3>
          {/* the prefetch set to false here means it won't prefetch the route but once it is mounted, it will be saved to cache anyway */}
          <Link href="/" style={{ color: 'white' }} prefetch={false}>
            Go Home
          </Link>
        </div>
        <h2>{data}</h2>
      </div>
      <div
        style={{
          width: '100%',
          height: '85vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </div>
    </div>
  );
}
