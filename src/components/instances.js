import React from 'react';
import ShopSystemButton from './ShopSystemButton';
import InstanceCard from './InstanceCard';
import { useTranslation } from 'react-i18next';

const InstancesPage = ({ visibleRight }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex-grow transition-all duration-300 ${visibleRight ? 'blur-md' : ''}`}>
      <div className="w-full p-6">
        {/* Popular Shop Systems */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('instances.popularShopSystems')}</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <ShopSystemButton version="5" 
            
            name="instances.shopware6"  
            status="instances.eCommerce"  
            bgColor="blue" textColor="blue-600" />
            <ShopSystemButton version="6"  name="instances.shopware6"  
  status="instances.eCommerce"   bgColor="purple" textColor="purple-600" />
            <div className="flex flex-col items-start p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <span className="w-12 h-6 bg-gray-200 rounded-full"></span>
            </div>
            <div className="flex flex-col items-start p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <span className="w-12 h-6 bg-gray-200 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* My Instances */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('instances.myInstances')}</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <InstanceCard
              version="5"
              title={t('instances.testShopwareFiveInstance')}
              url="https://staging.sw5.lederband-hamburg.de"
              createdAt="3.10.2024"
              catalogs={5}
              status={{ text: t('instances.synchronized'), color: 'green' }}
            />
            <InstanceCard
              version="6"
              title={t('instances.stageShopwareSixInstance')}
              url="https://staging.sw6.lederband-hamburg.de"
              createdAt="3.10.2024"
              catalogs={0}
              status={{ text: t('instances.synchronizing'), color: 'blue' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstancesPage;
