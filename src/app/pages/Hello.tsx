import Link from 'next/link';

const Hello: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>
      <Link href="/signin">
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default Hello;