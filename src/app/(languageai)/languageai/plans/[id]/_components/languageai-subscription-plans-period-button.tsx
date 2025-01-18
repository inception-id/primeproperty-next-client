import {ESubscriptionPeriod} from "@/lib/enums/ESubscriptionPeriod";
import {cn} from "@/lib/utils";
import {getDatePlusOneYear} from "@/app/(languageai)/languageai/plans/[id]/_lib/getDatePlusOneYear";
import {TLanguageaiSubscriptionPlan} from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import {useMemo} from "react";
import {getDatePlusThreeMonths} from "@/app/(languageai)/languageai/plans/[id]/_lib/getDatePlusThreeMonths";
import {getDatePlusOneMonth} from "@/app/(languageai)/languageai/plans/[id]/_lib/getDatePlusOneMonth";

type LanguageaiSubscriptionPlansPeriodButtonProps = {
    isActive: boolean;
    onClick: () => void;
    subscriptionPlan: TLanguageaiSubscriptionPlan
    period: ESubscriptionPeriod
}

const LanguageaiSubscriptionPlansPeriodButton = ({isActive, onClick, subscriptionPlan, period}: LanguageaiSubscriptionPlansPeriodButtonProps) => {

    const periodDetail  = useMemo(()=> {
       switch (period) {
           case ESubscriptionPeriod.OneYear:
               return {
                   title: "One year",
                   multiplier: 12,
                   expires: getDatePlusOneYear()
               }
           case ESubscriptionPeriod.ThreeMonths:
               return {
                   title: "Three Months",
                   multiplier: 3,
                   expires: getDatePlusThreeMonths()
               }
           case ESubscriptionPeriod.OneMonth:
                   return {
                       title: "One month",
                       multiplier: 1,
                       expires: getDatePlusOneMonth()
                   }
       }
    }, [period])

    return <button
        onClick={onClick}
        className={cn("flex gap-4 p-4 w-full border rounded-lg", {
            "border-primary bg-secondary": isActive
        })}
    >
        <div
            className={cn(
                "w-4 h-4 rounded-full border-2 border-primary mt-2",
                isActive && "border-4",
            )}
        />
        <div className="flex flex-col items-start">
            <div className="text-lg font-bold">{periodDetail.title}</div>
            <div className="opacity-75 flex gap-2">
              <span>
                Rp
                  {Number(
                      Number(subscriptionPlan?.discounted_price) * periodDetail.multiplier,
                  ).toLocaleString("id-ID")}
              </span>
                <s className="opacity-50">
                    Rp
                    {Number(
                        Number(subscriptionPlan?.initial_price) * periodDetail.multiplier,
                    ).toLocaleString("id-ID")}
                </s>
            </div>
            <div className="opacity-50">Expires in {periodDetail.expires}</div>
        </div>
    </button>
};

export default LanguageaiSubscriptionPlansPeriodButton