import PageTitle from '@/components/pageTitle';
import { QRCodeGenerator } from '@/components/qr-codes/qr-code-generator';
import { QRCodeList } from '@/components/qr-codes/qr-code-list';

export default function QRCodeManagementPage() {
  return (
    <div className="space-y-8">
      <PageTitle title="QR Code Management" />
      <QRCodeGenerator />
      <QRCodeList />
    </div>
  );
}
