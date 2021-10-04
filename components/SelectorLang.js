import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslateNav = () => {
  const { i18n } = useTranslation();
  console.log(i18n);

  const changeLanguage = (e, lang) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };

  return (
    <div className="btn-group">
      <button
        className="btn btn-dark dropdown-toggle me-1 text-uppercase"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {i18n.language}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="#" onClick={e => changeLanguage(e, 'es')}>
            ES
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={e => changeLanguage(e, 'en')}>
            EN
          </a>
        </li>
      </ul>
    </div>
  );
};
export default TranslateNav;
