import React from 'react';
import * as PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link';
import useStyles from './DesktopNavGroup.styles';

/**
 * component
 *
 */

const DesktopNavGroup = ({ items }) => {
  const classes = useStyles();
  const router = useRouter();
  const isActiveLink = (href, as) => router.pathname === href || router.asPath === as;
  return (
    <div className={classes.root}>
      {items.map(({
        slug, name, as, href,
      }) => (
        <Link key={slug} as={as} href={href}>
          <a
            className={clsx(
              classes.navLink,
              isActiveLink(href, as) && classes.activeLink,
            )}
          >
            {name}
          </a>
        </Link>
      ))}
    </div>
  );
};

DesktopNavGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default DesktopNavGroup;
