import Link from 'next/link';

const FirstPost = () => {
  return (
    <>
      <h1>First post</h1>
      <h2>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </h2>
      {/* <h3>
        <a
          href='https://www.google.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          Google
        </a>
      </h3> */}
    </>
  );
};

export default FirstPost;
