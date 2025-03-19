import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <h1>404 Page Not Found</h1>
      <p>Please, check page adress for mistakes and try again.</p>
      <Link to="/">
        <span>На главную</span>
      </Link>
    </div>
  );
}

export default NotFoundPage;
