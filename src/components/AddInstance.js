import React from 'react';
import { useTranslation } from 'react-i18next';

function AddInstance({ visibleRight, onClose }) {
  const { t } = useTranslation();

  return (
    <div>
      {visibleRight && (
        <div className="fixed top-0 right-0 flex flex-col h-full bg-gray-100 border-l border-gray-300 shadow-lg w-96">
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold">{t('addInstance.title')}</h2>
            <button className="text-red-500" onClick={onClose}>
              X
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <h3 className="text-lg font-semibold">{t('addInstance.generalInfo')}</h3>
            <input 
              type="text" 
              placeholder={t('addInstance.instanceName')} 
              className="w-full p-2 mt-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" 
            />
            <h3 className="mt-4 text-lg font-semibold">{t('addInstance.connectionSettings')}</h3>
            <input 
              type="text" 
              placeholder={t('addInstance.shopURL')} 
              className="w-full p-2 mt-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" 
            />
            <input 
              type="text" 
              placeholder={t('addInstance.clientID')} 
              className="w-full p-2 mt-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" 
            />
            <input 
              type="text" 
              placeholder={t('addInstance.clientSecret')} 
              className="w-full p-2 mt-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" 
            />
          </div>
          <div className="p-4 border-t border-gray-300">
            <button className="float-right p-2 text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600">
              {t('addInstance.testConnection')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddInstance;
