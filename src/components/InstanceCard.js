import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const InstanceCard = ({ version, title, url, createdAt, catalogs, status, creatorImage }) => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <div className="w-full max-w-md p-4 transition-transform transform bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105">
      {/* Version and Status */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded">
            {version}
          </span>
          <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded">
            Shopware 5
          </span>
        </div>
        <span className={`text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded`}>
          {status.text}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      {/* URL */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-1 text-sm text-gray-500 truncate hover:text-blue-600"
      >
        {url}
      </a>

      {/* Creator Info */}
      <div className="flex items-center mt-3">
        <img
          src="https://th.bing.com/th/id/OIP.8S8nd0rgWBcDRTr1MfPoOQHaHa?rs=1&pid=ImgDetMain" 
          alt={t('creatorName')}
          className="w-8 h-8 rounded-full" 
        />
        <div className="ml-2">
          <p className="text-sm font-semibold text-gray-700">{t('creatorName', { name: "Steve vom Wege" })}</p>
          <p className="text-xs text-gray-500">{t('creatorRole', { role: "Creator" })}</p>
        </div>
      </div>

      {/* Created At and Catalog Count */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <div className="flex items-center">
          <FaCalendarAlt className="mr-1 text-blue-500" />
          <span>{t('createdAt', { date: createdAt })}</span> {/* Translated created at text */}
        </div>
        <div className="flex items-center">
          <span className="mr-1 text-gray-500">Catalogs</span>
          <span className="px-2 py-1 text-blue-600 bg-blue-100 rounded-full">
            {catalogs}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InstanceCard;
