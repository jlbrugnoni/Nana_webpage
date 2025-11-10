import { useTranslation } from 'next-i18next';

const plans = [
  { nameKey: 'plan_single', priceKey: 'price_single' },
  { nameKey: 'plan_4', priceKey: 'price_4' },
  { nameKey: 'plan_8', priceKey: 'price_8' },
  { nameKey: 'plan_unlimited', priceKey: 'price_unlimited' }
];

export default function Plans() {
  const { t } = useTranslation('common');

  return (
    <section
      id="plans"
      className="scroll-mt-24 py-20 px-4 bg-brand-light text-brand-gray font-gotham"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">{t('plans')}</h2>
           <h3 className="text-4xl font-bold mb-12">{t('plans_coming')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* {plans.map((plan) => (
            <div
              key={plan.nameKey}
              className="border border-brand-beige bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{t(plan.nameKey)}</h3>
              <p className="text-2xl font-bold text-brand-gray">{t(plan.priceKey)}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}