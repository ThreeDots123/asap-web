import PayMerchantComponent from "@/components/transactions/pay";
import InvalidPayUrl from "@/components/transactions/pay/invalid-pay-url";
import { validateProfileAction } from "@/server-actions/payment";

type PayMerchantPageProps = {
  params: Promise<{ profile: string }>;
};

export default async function PayMerchantPage({
  params,
}: PayMerchantPageProps) {
  const { profile } = await params;
  const result = await validateProfileAction(decodeURIComponent(profile));

  console.log(result);

  if (!result.success) {
    return <InvalidPayUrl />;
  }

  return (
    <PayMerchantComponent
      profile={decodeURIComponent(profile)}
      name={(result.data as any).businessName}
    />
  );
}
