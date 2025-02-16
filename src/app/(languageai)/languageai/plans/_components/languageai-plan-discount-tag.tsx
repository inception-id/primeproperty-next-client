type LanguageaiPlanDiscountTagProps = {
  initialPrice: string;
  discountedPrice: string;
};

const LanguageaiPlanDiscountTag = ({
  initialPrice,
  discountedPrice,
}: LanguageaiPlanDiscountTagProps) => {
  const discountTag = (
    ((Number(initialPrice) - Number(discountedPrice)) / Number(initialPrice)) *
    100
  ).toFixed();
  return (
    <div className="flex items-center gap-2 mb-4">
      <s className="opacity-50">
        Rp {Number(initialPrice).toLocaleString("id-ID")}
      </s>
      <span className="bg-primary text-primary-foreground rounded-lg py-1 px-2 font-semibold">
        {discountTag}% Discount
      </span>
    </div>
  );
};

export default LanguageaiPlanDiscountTag;
