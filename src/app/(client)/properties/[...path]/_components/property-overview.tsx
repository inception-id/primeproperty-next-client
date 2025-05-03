import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { PropertyInformation } from "./property-information";
import { FACILITY_ICON } from "@/lib/enums/facilities";
import { formatToCurrencyUnit } from "@/lib/intl/format-to-currency-unit";

type PropertyOverviewProps = {
  property: PropertyWithAgent;
};

export const PropertyOverview = ({ property }: PropertyOverviewProps) => {
  return (
    <div className="flex flex-col gap-8   flex-1">
      <div>
        <div className="font-bold text-lg">
          {formatToCurrencyUnit(property[0].price)}
        </div>
        <h1 className="text-lg font-light">{property[0].title}</h1>
        <p className="text-sm text-muted-foreground/75">
          {property[0].street}, {property[0].regency}
        </p>
      </div>

      <PropertyInformation property={property[0]} />

      <div>
        <p className="text-base font-semibold">Deskripsi</p>
        <h2 className="whitespace-pre-wrap text-muted-foreground text-sm">
          {property[0].description}
        </h2>
      </div>

      <div>
        <p className="text-base font-semibold mb-2">Fasilitas</p>
        <div className="grid grid-cols-2 gap-y-2">
          {property[0].facilities.map((facility, index) => (
            <p
              key={`${index}-${facility.indonesian_label}`}
              className="flex items-center text-lg gap-2"
            >
              {FACILITY_ICON[facility.value]}
              <span className="capitalize text-base">
                {facility.indonesian_label}
              </span>
            </p>
          ))}
        </div>
      </div>

      {property[0].gmap_iframe && (
        <div className="w-full overflow-hidden rounded">
          <p className="text-base font-semibold mb-2">Perkiraan Lokasi</p>

          <div dangerouslySetInnerHTML={{ __html: property[0].gmap_iframe }} />
        </div>
      )}
    </div>
  );
};
