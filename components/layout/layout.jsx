import Link from 'next/link';

const Layout = (props) => {
  return (
    <>
      <header>
        <div>
          Hacker News
        </div>
        <ul>
          <li>
            <Link href="/news">
              <a>new</a>
            </Link>
          </li>
          <li>
            <Link href="/front">
              <a>past</a>
            </Link>
          </li>
          <li>
            <Link href="/newcomments">
              <a>comments</a>
            </Link>
          </li>
          <li>
            <Link href="/ask">
              <a>ask</a>
            </Link>
          </li>
        </ul>
      </header>

      <main>
        {props.children}
      </main>

      <footer>
        footer
      </footer>
    </>
  );
};

export default Layout;