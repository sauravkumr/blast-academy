import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto: saurav@blastai.org">Contact</a>
        </li>
        <li>
          <Link to="/curriculum/">Curriculum</Link>
        </li>
        <li>
          <Link to="#faq">FAQ's</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;