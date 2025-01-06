import { ChemicalInventory } from '@/components/inventory/chemical-inventory';
import PageTitle from '@/components/pageTitle';

export default function InventoryPage() {
  return (
    <>
      <PageTitle title="Chemical Inventory" />
      <ChemicalInventory />
    </>
  );
}
