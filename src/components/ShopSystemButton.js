import React from 'react';
import { useTranslation } from 'react-i18next';

const ShopSystemButton = ({ version, name, status, bgColor, textColor }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex items-center p-2 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md`}>
      <div className={`flex items-center justify-center w-10 h-10 bg-${bgColor}-100 rounded-l-lg`}>
        <span className={`text-lg font-bold text-${textColor}`}>{version}</span>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-gray-800">{t(name)}</h3>
        <p className="text-xs text-gray-400">{t(status)}</p>
      </div>
    </div>
  );
};

export default ShopSystemButton;
